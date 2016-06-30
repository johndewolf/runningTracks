import * as types from '../actions/action-types.js';
const initialState = {
  username: "",
  loggedIn: false
};

const userReducer = (state = initialState, action) => {
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

export default userReducer;