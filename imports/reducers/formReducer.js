import * as types from '../actions/action-types.js';

const initialState = [{
  mile: 1,
  genre: "",
  tempo: "0.1|0.2",
  time: 5
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
      var newGroup = Object.assign({}, initialState[0], {
        mile: state.length + 1
      })
      return (state.concat(newGroup))
    case types.REMOVE_FIELD_GROUP:
    return state.filter(function(group) {
      return group.mile !== action.mile
    })
    
    case types.RESET_FIELDS:
      return initialState
    default:
      return state
  }
}

export default formReducer;