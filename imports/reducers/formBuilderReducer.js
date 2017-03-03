import * as types from '../actions/action-types.js';
const initialState = {
  genres: [],
  activeMile: 1
}

const formBuilder = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_GENRES:
      return Object.assign({}, state, {genres: action.genres});
    case types.UPDATE_ACTIVE_MILE:
      return Object.assign({}, state, {activeMile: action.mile});
    default:
      return state
  }
}

export default formBuilder;
