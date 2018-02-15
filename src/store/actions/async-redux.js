import { ASYNC_REDUX_GET_TIME } from '../types/async-redux'
import { createAction } from 'redux-actions'

export const asyncGetTime = createAction(
  ASYNC_REDUX_GET_TIME,
  async () => {
    // await wepy.request({ url: '/api/getCurrentTime' })
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return Date.now()
  }
)