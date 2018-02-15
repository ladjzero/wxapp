import { combineReducers } from 'redux'
import basicRedux from './basic-redux'
import asyncRedux from './async-redux'

export default combineReducers({
  basicRedux,
  asyncRedux
})