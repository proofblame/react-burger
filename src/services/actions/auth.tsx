import api from '../../utils/api'
import { setCookie, getCookie, deleteCookie } from '../../utils/helpers'
import { TUserData } from '../types/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const updateToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (refreshToken) {
    try {
      const res = await api.updateToken(refreshToken)
      deleteCookie('accessToken');
      localStorage.removeItem('refreshToken');

      setCookie('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    } catch (error) {
      console.error(error)
    }
  }
}

export const getUser = createAsyncThunk(
  'getUser',
  async () => {
    const accessToken = getCookie('accessToken')
    if (accessToken) {
      try {
        const res = await api.getUser(accessToken)
        return res.user
      } catch (error: any) {
        if (error.message === 'jwt expired') {
          await updateToken()
          getUser()
        } else {
          throw new Error(error.message)
        }
      }
    }
  }
)

export const logout = createAsyncThunk(
  'logout',
  async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        await api.logout(refreshToken)
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
      } catch (error: any) {
        throw new Error(error.message)
      }
    } else {
      throw new Error('Error logout')
    }
  }
)

export const loginUser = createAsyncThunk(
  'loginUser',
  async ({ email, password }: { email: string, password: string }) => {
    try {
      const res = await api.login(email, password)
      setCookie('accessToken', res.accessToken)
      localStorage.setItem('refreshToken', res.refreshToken)
      return res.user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const registerUser = createAsyncThunk(
  'registerUser',
  async ({ email, password, name }: TUserData & { password: string }) => {
    try {
      const res = await api.register(email, password, name)
      setCookie('accessToken', res.accessToken)
      localStorage.setItem('refreshToken', res.refreshToken)
      return res.user
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const updateUser = createAsyncThunk(
  'updateUser',
  async ({ email, password, name }: TUserData & { password: string }) => {
    const accessToken = getCookie('accessToken')
    if (accessToken) {
      try {
        const res = await api.editUser(accessToken, email, password, name)
        return res.user
      } catch (error: any) {
        if (error.message === 'jwt expired') {
          await updateToken()
          updateUser({ email, password, name })
        } else {
          throw new Error(error.message)
        }
      }
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  async ({ email }: { email: string }) => {
    try {
      const res = await api.forgotPassword(email)
      return res
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async ({ password, token }: { password: string, token: string }) => {
    try {
      const res = await api.resetPassword(password, token)
      return res
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)
