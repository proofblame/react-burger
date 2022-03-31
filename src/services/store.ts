import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/index'
import logger from 'redux-logger'

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })
}


