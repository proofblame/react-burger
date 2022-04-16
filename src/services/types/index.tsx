import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { rootReducer } from '../reducers'
import { setupStore } from '../store'

export type TWsActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>,
  wsDisconnect: ActionCreatorWithoutPayload,
  onOpen: ActionCreatorWithoutPayload,
  onClose: ActionCreatorWithoutPayload,
  onError: ActionCreatorWithoutPayload,
  onMessage: ActionCreatorWithPayload<any>,
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

