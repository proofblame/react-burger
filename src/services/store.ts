import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/index'
import logger from 'redux-logger'
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsConnectionClosed, wsConnectionError, wsConnectionSuccess, wsGetMessage } from './reducers/feed';
import { wsConnectionClose, wsConnectionStart } from './actions/feed';
import { TWsActionTypes } from './types';

const wsActions: TWsActionTypes = {
  wsConnect: wsConnectionStart,
  wsDisconnect: wsConnectionClose,
  onMessage: wsGetMessage,
  onOpen: wsConnectionSuccess,
  onClose: wsConnectionClosed,
  onError: wsConnectionError,
};

const wsMiddleware = socketMiddleware(wsActions);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wsMiddleware).concat(logger),
  })
}


