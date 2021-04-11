import { combineReducers } from 'redux'
import userReducer from './user'
import networkReducer from './network'

export default combineReducers({
  user: userReducer,
  network: networkReducer
})
