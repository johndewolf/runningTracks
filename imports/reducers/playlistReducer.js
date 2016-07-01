import * as types from '../actions/action-types.js';
const initialState = {
	spotifyData: []
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRACKS':
      return Object.assign({}, state, {
        spotifyData: action.tracks
      })
    case 'REMOVE_TRACK':
    	const newTrackList = state.spotifyData.filter(function(track) {
  			return track.id !== action.trackId })
    	return Object.assign({}, state, {
        spotifyData: newTrackList
      })

    default:
      return state
  }
}

export default playlistReducer;