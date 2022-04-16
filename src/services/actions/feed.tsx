import { createAction } from '@reduxjs/toolkit'

export const wsConnectionStart = createAction<string>('FEED_WS_CONNECTION_START')
export const wsConnectionClose = createAction('FEED_WS_CONNECTION_CLOSE')