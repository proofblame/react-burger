import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgotPassword, getUser, loginUser, logout, registerUser, resetPassword, updateUser } from '../actions/auth'
import { TAuthState, TUserData } from '../types/auth'

export const initialState: TAuthState = {

  userData: null,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  userRequest: false,
  userFailed: false,

  updateRequest: false,
  updateFailed: false,

  forgotSuccess: false,
  forgotRequest: false,
  forgotFailed: false,

  resetRequest: false,
  resetFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  loader: false,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.userRequest = true
        state.userFailed = false
        state.loader = true
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<TUserData>) => {
        state.userData = action.payload
        state.userRequest = false
        state.loader = false
      })
      .addCase(getUser.rejected, (state) => {
        state.userData = initialState.userData
        state.userRequest = false
        state.userFailed = true
        state.loader = false
      })
      .addCase(logout.pending, (state) => {
        state.logoutRequest = true
        state.logoutFailed = false
        state.loader = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.userData = initialState.userData
        state.logoutRequest = false
        state.loader = false
      })
      .addCase(logout.rejected, (state) => {
        state.userData = initialState.userData
        state.logoutRequest = false
        state.logoutFailed = true
        state.loader = false
      })
      .addCase(loginUser.pending, (state) => {
        state.loginRequest = true
        state.loginFailed = false
        state.loader = true
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<TUserData>) => {
        state.userData = action.payload
        state.loginRequest = false
        state.loader = false
      })
      .addCase(loginUser.rejected, (state) => {
        state.userData = initialState.userData
        state.loginRequest = false
        state.loginFailed = true
        state.loader = false
      })
      .addCase(registerUser.pending, (state) => {
        state.registerRequest = true
        state.registerFailed = false
        state.loader = true
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<TUserData>) => {
        state.userData = action.payload
        state.registerRequest = false
        state.loader = false
      })
      .addCase(registerUser.rejected, (state) => {
        state.userData = initialState.userData
        state.registerRequest = false
        state.registerFailed = true
        state.loader = false
      })
      .addCase(updateUser.pending, (state) => {
        state.updateRequest = true
        state.updateFailed = false
        state.loader = true
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<TUserData>) => {
        state.userData = action.payload
        state.updateRequest = false
        state.loader = false
      })
      .addCase(updateUser.rejected, (state) => {
        state.userData = initialState.userData
        state.updateRequest = false
        state.updateFailed = true
        state.loader = false
      })
      .addCase(forgotPassword.pending, (state) => {
        state.forgotRequest = true
        state.forgotFailed = false
        state.loader = true
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.forgotSuccess = true
        state.forgotRequest = false
        state.loader = false
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.forgotSuccess = false
        state.forgotRequest = false
        state.forgotFailed = true
        state.loader = false
      })
      .addCase(resetPassword.pending, (state) => {
        state.forgotRequest = true
        state.forgotFailed = false
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.forgotRequest = false
        state.forgotSuccess = false
      })
      .addCase(resetPassword.rejected, (state) => {
        state.forgotRequest = false
        state.forgotFailed = true
        state.forgotSuccess = false
      })
  },
})

const { reducer } = authSlice

export default reducer