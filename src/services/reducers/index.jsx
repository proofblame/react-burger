import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients'
import authReduser from './auth'


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  auth: authReduser
})