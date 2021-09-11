import { combineReducers } from 'redux'
import logReducers from './logReducers'
import techReducer from './techReducer'

export default combineReducers ({
  log: logReducers,
  tech: techReducer
})