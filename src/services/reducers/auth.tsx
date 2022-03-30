import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

  resetSuccess: false,
  resetRequest: false,
  resetFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  loader: false,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Регистрация
    getRegisterRequest(state) {
      state.registerRequest = true
      state.registerFailed = false
    },
    getRegisterSuccess(state, action: PayloadAction<TUserData>) {
      state.userData = action.payload
      state.registerRequest = false
    },
    getRegisterFailed(state) {
      state.registerRequest = false
      state.registerFailed = true
    },
    // Авторизация
    getLoginRequest(state) {
      state.loginRequest = true
      state.loginFailed = false
    },
    getLoginSuccess(state, action: PayloadAction<TUserData>) {
      state.userData = action.payload
      state.loginRequest = false
    },
    getLoginFailed(state) {
      state.loginRequest = false
      state.loginFailed = true
    },
    // Получение пользователя
    getUserRequest(state) {
      state.userRequest = true
      state.userFailed = false
    },
    getUserSuccess(state, action: PayloadAction<TUserData>) {
      state.userData = action.payload
      state.userRequest = false
    },
    getUserFailed(state) {
      state.userRequest = false
      state.userFailed = true
    },
    // Редактирование пользователя
    updateUserRequest(state) {
      state.updateRequest = true
      state.updateFailed = false
    },
    updateUserSuccess(state, action: PayloadAction<TUserData>) {
      state.userData = action.payload
      state.updateRequest = false
    },
    updateUserFailed(state) {
      state.updateRequest = false
      state.updateFailed = true
    },
    // Восстановление пароля
    forgotPasswordRequest(state) {
      state.forgotRequest = true
      state.forgotFailed = false
    },
    forgotPasswordSuccess(state, action: PayloadAction<boolean>) {
      state.forgotSuccess = action.payload
      state.forgotRequest = false
    },
    forgotPasswordFailed(state) {
      state.forgotRequest = false
      state.forgotFailed = true
    },
    // Сброс пароля
    resetPasswordRequest(state) {
      state.forgotRequest = true
      state.forgotFailed = false
    },
    resetPasswordSuccess(state, action: PayloadAction<boolean>) {
      state.resetSuccess = action.payload
      state.forgotRequest = false
    },
    resetPasswordFailed(state) {
      state.forgotRequest = false
      state.forgotFailed = true
    },
    // Выход пароля
    logoutRequest(state) {
      state.logoutRequest = true
      state.logoutFailed = false
    },
    logoutSuccess(state) {
      state.userData = null
      state.logoutRequest = false
    },
    logoutFailed(state) {
      state.logoutRequest = false
      state.logoutFailed = true
    },
    // Открытие/закрытие лоадера
    enableLoader(state) {
      state.loader = true
    },
    disableLoader(state) {
      state.loader = false
    },
    // Переадресация с reset-password
    disableReset(state) {
      state.forgotSuccess = false
    },
  }
})
const { actions, reducer } = authSlice;

export const {
  getRegisterRequest,
  getRegisterSuccess,
  getRegisterFailed,
  getLoginRequest,
  getLoginSuccess,
  getLoginFailed,
  getUserRequest,
  getUserSuccess,
  getUserFailed,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailed,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailed,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
  enableLoader,
  disableLoader,
  disableReset
} = actions;

export default reducer;