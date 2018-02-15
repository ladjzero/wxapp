import { handleActions } from 'redux-actions'
import { BASIC_REDUX_GET_TIME } from '../types/basic-redux'

export default handleActions({
  [BASIC_REDUX_GET_TIME] (state, action) {
    return {
      ...state,
      time: action.payload
    }
  }
}, {
  time: 0
})