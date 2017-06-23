import * as types from '../actions/action-types.js';
const initialState = {
  username: "",
  loggedIn: false,
  displayFlashBanner: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        username: action.userProfile,
        loggedIn: true
      })
    case types.USER_LOGOUT:
      return Object.assign({}, state, {
        username: "",
        loggedIn: false
      })
    case types.DISPLAY_FLASH_BANNER:
      return Object.assign({}, state, {
        displayFlashBanner: action.bool
      })
    default:
      return state
  }
}

export default userReducer;
