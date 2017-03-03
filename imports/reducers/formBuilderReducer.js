import * as types from '../actions/action-types.js';
const initialState = {
  genres: [],
  activeFieldGroup: 1
}

const formBuilder = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_GENRES:
      return Object.assign({}, state, {genres: action.genres});
    default:
      return state
  }
}

export default formBuilder;
