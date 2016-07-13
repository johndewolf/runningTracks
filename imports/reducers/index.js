import { combineReducers } from 'redux'
import userReducer from './userReducer'
import playlistReducer from './playlistReducer'
import formReducer from './formReducer'

const reducers = combineReducers({
  userReducer,
  playlistReducer,
  formReducer
})

export default reducers
