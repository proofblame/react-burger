import { initialState } from './auth';
import authReducer from './auth';
import { AnyAction } from "redux";
import { TAuthState } from '../types/auth'
import { forgotPassword, getUser, loginUser, logout, registerUser, resetPassword, updateUser } from '../actions/auth';

describe('authReducer', () => {

  it('return initial state', () => {
    expect(authReducer(undefined, {} as AnyAction)).toEqual(initialState);
  })

  // Сброс пароля
  it('resetPassword pending', () => {

    const expected: TAuthState = {
      ...initialState,
      forgotRequest: true,
      forgotFailed: false,
    };

    expect(authReducer(initialState, resetPassword.pending('', {
      password: 'string',
      token: 'string',
    }))).toEqual(expected)
  })

  it('resetPassword fulfilled', () => {

    const expected: TAuthState = {
      ...initialState,
      forgotRequest: false,
      forgotSuccess: false
    };

    expect(authReducer(initialState, resetPassword.fulfilled(
      { password: 'string', token: 'string' },
      '',
      { password: 'string', token: 'string' }
    ))).toEqual(expected)
  })

  it('resetPassword rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      forgotRequest: false,
      forgotFailed: true,
      forgotSuccess: false,
    };

    expect(authReducer(initialState, resetPassword.rejected(
      new Error(),
      '',
      { password: 'string', token: 'string', }
    ))).toEqual(expected)
  })

  // Восстановление пароля
  it('forgotPassword pending', () => {

    const expected: TAuthState = {
      ...initialState,
      forgotRequest: true,
      forgotFailed: false,
      loader: true,
    };

    expect(authReducer(initialState, forgotPassword.pending(
      '',
      { email: 'string', }
    ))).toEqual(expected)
  })

  it('forgotPassword fulfilled', () => {

    const expected: TAuthState = {
      ...initialState,
      forgotSuccess: true,
      forgotRequest: false,
      loader: false,
    };

    expect(authReducer(initialState, forgotPassword.fulfilled(
      undefined,
      '',
      { email: 'string', }
    ))).toEqual(expected)
  })

  it('forgotPassword rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      forgotSuccess: false,
      forgotRequest: false,
      forgotFailed: true,
      loader: false,
    };

    expect(authReducer(initialState, forgotPassword.rejected(
      new Error(),
      '',
      { email: 'string', }
    ))).toEqual(expected)
  })

  // Обновление данных пользователя
  it('updateUser pending', () => {

    const expected: TAuthState = {
      ...initialState,
      updateRequest: true,
      updateFailed: false,
      loader: true,
    };

    expect(authReducer(initialState, updateUser.pending(
      '', {
      email: 'string',
      password: 'string',
      name: 'string',
    }
    ))).toEqual(expected)
  })

  it('updateUser fulfilled', () => {

    const expected: TAuthState = {
      ...initialState,
      userData: {
        email: 'string',
        password: 'string',
        name: 'string',
      },
      updateRequest: false,
      loader: false,
    };


    expect(authReducer(initialState, updateUser.fulfilled({
      email: 'string',
      password: 'string',
      name: 'string',
    }, '', {
      email: 'string',
      name: 'string',
      password: 'string',
    }))).toEqual(expected)
  })

  it('updateUser rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      userData: null,
      updateRequest: false,
      updateFailed: true,
      loader: false,
    };

    expect(authReducer(initialState, updateUser.rejected(
      new Error(), '', {
      email: 'string',
      password: 'string',
      name: 'string',
    }))).toEqual(expected)
  })

  // Регистрация пользователя
  it('registerUser pending', () => {

    const expected: TAuthState = {
      ...initialState,
      registerRequest: true,
      registerFailed: false,
      loader: true,
    };

    expect(authReducer(initialState, registerUser.pending('', {
      email: 'string',
      password: 'string',
      name: 'string',
    }))).toEqual(expected)
  })

  it('registerUser fulfilled', () => {


    const expected: TAuthState = {
      ...initialState,
      userData: {
        email: 'string',
        password: 'string',
        name: 'string',
      },
      registerRequest: false,
      loader: false,
    };


    expect(authReducer(initialState, registerUser.fulfilled({
      email: 'string',
      password: 'string',
      name: 'string',
    }, '', {
      email: 'string',
      name: 'string',
      password: 'string',
    }))).toEqual(expected)
  })

  it('registerUser rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      userData: null,
      registerRequest: false,
      registerFailed: true,
      loader: false,
    };

    expect(authReducer(initialState, registerUser.rejected(new Error(), '', {
      email: 'string',
      password: 'string',
      name: 'string',
    }))).toEqual(expected)
  })

  // Login
  it('loginUser pending', () => {

    const expected: TAuthState = {
      ...initialState,
      loginRequest: true,
      loginFailed: false,
      loader: true,
    };

    expect(authReducer(initialState, loginUser.pending('', {
      email: 'string',
      password: 'string',
    }))).toEqual(expected)
  })

  it('loginUser fulfilled', () => {


    const expected: TAuthState = {
      ...initialState,
      userData: {
        email: 'string',
        password: 'string',
        name: 'string'
      },
      loginRequest: false,
      loader: false,
    };


    expect(authReducer(initialState, loginUser.fulfilled({
      email: 'string',
      password: 'string',
      name: 'string'
    }, '', {
      email: 'string',
      password: 'string',
    }))).toEqual(expected)
  })

  it('loginUser rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      userData: null,
      loginRequest: false,
      loginFailed: true,
      loader: false,
    };

    expect(authReducer(initialState, loginUser.rejected(
      new Error(), '', {
      email: 'string',
      password: 'string',
    }))).toEqual(expected)
  })

  // logout
  it('logout pending', () => {

    const expected: TAuthState = {
      ...initialState,
      logoutRequest: true,
      logoutFailed: false,
      loader: true,
    };

    expect(authReducer(initialState, logout.pending(''))).toEqual(expected)
  })

  it('logout fulfilled', () => {


    const expected: TAuthState = {
      ...initialState,
      userData: null,
      logoutRequest: false,
      loader: false,
    };


    expect(authReducer(initialState, logout.fulfilled(undefined, ''))).toEqual(expected)
  })

  it('logout rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      userData: null,
      logoutRequest: false,
      logoutFailed: true,
      loader: false,
    };

    expect(authReducer(initialState, logout.rejected(
      new Error(), ''))).toEqual(expected)
  })

  // getUser
  it('getUser pending', () => {

    const expected: TAuthState = {
      ...initialState,
      userRequest: true,
      userFailed: false,
      loader: true,
    };

    expect(authReducer(initialState, getUser.pending(''))).toEqual(expected)
  })

  it('getUser fulfilled', () => {


    const expected: TAuthState = {
      ...initialState,
      userData: {
        email: 'string',
        password: 'string',
        name: 'string'
      },
      userRequest: false,
      loader: false,
    };


    expect(authReducer(initialState, getUser.fulfilled({
      email: 'string',
      password: 'string',
      name: 'string'
    }, ''))).toEqual(expected)
  })

  it('getUser rejected', () => {

    const expected: TAuthState = {
      ...initialState,
      userData: null,
      userRequest: false,
      userFailed: true,
      loader: false,
    };

    expect(authReducer(initialState, getUser.rejected(
      new Error(), ''))).toEqual(expected)
  })

})