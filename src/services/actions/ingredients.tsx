import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api'
import { getCookie } from '../../utils/helpers';

export const getIngredients = createAsyncThunk(
  'getIngredients',
  async () => {
    try {
      const res = await api.getIngredients()
      return res.data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const sendOrder = createAsyncThunk(
  'sendOrder',
  async (idList: Array<string>) => {
    const accessToken = getCookie('accessToken')
    if (accessToken) {
      try {
        const res = await api.sendIngredients(idList, accessToken)
        return res.order
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
  }
)