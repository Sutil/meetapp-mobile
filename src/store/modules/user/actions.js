import ActionNames from '../../actionNames';

export function updateProfileRequest(data) {
  return {
    type: ActionNames.USER_PROFILE_UPDATE_REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: ActionNames.USER_PROFILE_UPDATE_SUCCESS,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: ActionNames.USER_PROFILE_UPDATE_FAILURE,
  };
}
