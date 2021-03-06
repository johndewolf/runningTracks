import * as types from '../actions/action-types.js';

export const userProfileSuccess = (userProfile) => {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}

export const userLogout = (loggedIn) => {
  return {
    type: types.USER_LOGOUT,
    loggedIn
  };
}

export const displayFlashBanner = (bool) => {
  return {
    type: types.DISPLAY_FLASH_BANNER,
    bool
  };
}

export const getTracks = (tracks) => {
  return {
    type: types.GET_TRACKS,
    tracks
  };
}

export const removeTrack = (trackId) => {
  return {
    type: types.REMOVE_TRACK,
    trackId
  };
}

export const addTracks = (tracks) => {
  return {
    type: types.ADD_TRACKS,
    tracks
  };
}

export const resetFields = (resetFields) => {
  return {
    type: types.RESET_FIELDS,
    resetFields
  }
}

export const addGenres = (genres) => {
  return {
    type: types.ADD_GENRES,
    genres
  }
}

export const updateActiveMile = (mile) => {
  return {
    type: types.UPDATE_ACTIVE_MILE,
    mile
  }
}

export const updateField = (updateField) => {
  return {
    type: types.UPDATE_FIELD,
    updateField
  };
}
export const addFieldGroup = (addFieldGroup) => {
  return {
    type: types.ADD_FIELD_GROUP,
    addFieldGroup
  };
}
export const removeFieldGroup = (mile) => {
  return {
    type: types.REMOVE_FIELD_GROUP,
    mile
  };
}
