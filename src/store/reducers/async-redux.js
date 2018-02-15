import { handleActions } from 'redux-actions'
import { ASYNC_REDUX_GET_TIME } from '../types/async-redux'

export default handleActions({
  [ASYNC_REDUX_GET_TIME] (state, action) {
    return {
      ...state,
      time: action.payload
    }
  }
}, {
  time: 0
})