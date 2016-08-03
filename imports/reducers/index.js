import { combineReducers } from 'redux'
import userReducer from './userReducer'
import playlistReducer from './playlistReducer'
import formReducer from './formReducer'
import genres from './genreReducer'

const reducers = combineReducers({
  userReducer,
  playlistReducer,
  formReducer,
  genres
})

export default reducers
