import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients'
import authReduser from './auth'
import feedReducer from './feed'


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  auth: authReduser,
  feed: feedReducer
})