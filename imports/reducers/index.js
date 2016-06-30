import { combineReducers } from 'redux'
import userReducer from './userReducer'
import playlistReducer from './playlistReducer'

const reducers = combineReducers({
  userReducer,
  playlistReducer
})

export default reducers
