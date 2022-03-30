export type TUserData = {
  email: string
  name: string
}

export type TAuthState = {
  userData: TUserData | null,
  registerRequest: boolean,
  registerFailed: boolean,
  loginRequest: boolean,
  loginFailed: boolean,
  userRequest: boolean,
  userFailed: boolean,
  updateRequest: boolean,
  updateFailed: boolean,
  forgotSuccess: boolean,
  forgotRequest: boolean,
  forgotFailed: boolean,
  resetSuccess: boolean,
  resetRequest: boolean,
  resetFailed: boolean,
  logoutRequest: boolean,
  logoutFailed: boolean,
  loader: boolean,
}
