import { createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { TFeed, TFeedState } from '../types/feed'

export const initialState: TFeedState = {
  wsConnected: false,
  feed: null,
}

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    wsConnectionSuccess(state) {
      state.wsConnected = true
    },
    wsConnectionError(state) {
      state.wsConnected = false
    },
    wsConnectionClosed(state) {
      state.wsConnected = false
    },
    wsGetMessage(state: TFeedState, action: PayloadAction<TFeed>) {
      state.feed = action.payload
    }
  },
})

const { reducer, actions } = feedSlice

export const {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage,
} = actions

export default reducer