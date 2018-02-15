import { BASIC_REDUX_GET_TIME } from '../types/basic-redux'
import { createAction } from 'redux-actions'

export const basicGetTime = createAction(BASIC_REDUX_GET_TIME, () => Date.now())