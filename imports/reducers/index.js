import { combineReducers } from 'redux'
import * as types from '../actions/action-types.js';
const initialState = {
  username: "",
  loggedIn: false
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        username: action,
        loggedIn: true
      })
    default:
      return state
  }
}

const playlist = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TRACK':
      return {
        trackName: action.trackName
      }
    default:
      return state
  }
}

// const reducers = combineReducers({
//   userState,
//   playlist
// })
const reducers = userState;
export default reducers
