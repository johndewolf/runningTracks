import * as types from '../actions/action-types.js';
const initialState = {
	spotifyData: []
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRACKS':
      return Object.assign({}, state, {
        spotifyData: action,
      })
    default:
      return state
  }
}

export default playlistReducer;