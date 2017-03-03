import { combineReducers } from 'redux'
import userReducer from './userReducer'
import playlistReducer from './playlistReducer'
import formReducer from './formReducer'
import formBuilderReducer from './formBuilderReducer'

const reducers = combineReducers({
  userReducer,
  playlistReducer,
  formReducer,
  formBuilderReducer
})

export default reducers
