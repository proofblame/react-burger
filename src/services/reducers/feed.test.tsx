import { AnyAction } from 'redux'
import { initialState } from './feed'
import feedReducer from './feed'
import { TFeedState } from '../types/feed'
import { wsConnectionSuccess, wsConnectionError, wsConnectionClosed, wsGetMessage } from './feed'


describe('feedReducer', () => {
  it('return initial state', () => {
    expect(feedReducer(undefined, {} as AnyAction)).toEqual(initialState);
  })

  it('wsConnectionSuccess', () => {
    const expected: TFeedState = {
      ...initialState,
      wsConnected: true
    };
    expect(feedReducer(initialState, wsConnectionSuccess())).toEqual(expected);
  })

  it('wsConnectionError', () => {
    const expected: TFeedState = {
      ...initialState,
      wsConnected: false
    };
    expect(feedReducer(initialState, wsConnectionError())).toEqual(expected);
  })

  it('wsConnectionClosed', () => {
    const expected: TFeedState = {
      ...initialState,
      wsConnected: false
    };
    expect(feedReducer(initialState, wsConnectionClosed())).toEqual(expected);
  })

  it('wsGetMessage', () => {
    const feedData = {
      success: true,
      orders: [{
        number: 12345,
        ingredients: [
          '60d3b41abdacab0026a733cb',
          '60d3b41abdacab0026a733c6'
        ],
        _id: '62552b821a3b2c001bcff46b',
        status: 'done',
        createdAt: '2022-04-12T07:34:26.768Z',
        updatedAt: '2022-04-12T07:34:26.768Z',
        name: 'Краторный био-марсианский бургер',
      }],
      total: 12345,
      totalToday: 123456,
    }



    const expected: TFeedState = {
      ...initialState,
      feed: feedData
    };
    expect(feedReducer(initialState, wsGetMessage(feedData))).toEqual(expected);
  })


})

