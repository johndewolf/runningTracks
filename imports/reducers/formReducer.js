import assign from 'lodash.assign';
import * as types from '../actions/action-types.js';
const initialState = [{
  mile: 1,
  genre: "",
  tempo: "0.1|0.2",
  time: 0
}]

const field = (state, action) => {
  switch (action.type) {

    case 'UPDATE_FIELD':
      if (state.mile !== action.updateField.mile) {
        return state
      }
      return Object.assign({}, state, {
        [action.updateField.field]: action.updateField.value
      })
    default:
      return state
  }
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FIELD:
      return state.map(t =>
        field(t, action)
      )
    case types.ADD_FIELD_GROUP:
      return (state.concat({mile: action.addFieldGroup, genre: "",  tempo: "0.1|0.2", time: 0}))
    default:
      return state
  }
}

export default formReducer;