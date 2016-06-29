const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';

export const userProfileSuccess = (userProfile) => {
  return {
    type: USER_PROFILE_SUCCESS,
    userProfile
  };
}
