import * as types from '../actions/action-types.js';
const initialState = {
  1: {
    genre: "",
    tempo: "0.1|0.2",
    time: ""
  }
}


const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FIELD:
      let newState = state
      newState[action.updateField.mile][action.updateField.field] = action.updateField.value;
      return Object.assign({}, state, newState)
    default:
      return state
  }
}

export default formReducer;