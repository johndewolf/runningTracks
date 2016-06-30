const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
const GET_TRACKS = 'GET_TRACKS';
const ADD_TRACKS = 'ADD_TRACKS';

export const userProfileSuccess = (userProfile) => {
  return {
    type: USER_PROFILE_SUCCESS,
    userProfile
  };
}

export const getTracks = (tracks) => {
  return {
    type: GET_TRACKS,
    tracks
  };
}
export const addTracks = (tracks) => {
  return {
    type: ADD_TRACKS,
    tracks
  };
}