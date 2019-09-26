import produce from 'immer';
import actionNames from '../../actionNames';

const INITIAL_STATE = {
  profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionNames.AUTH_SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        draft.signed = true;
        break;
      }

      case actionNames.USER_PROFILE_UPDATE_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }

      case actionNames.AUTH_SIGN_OUT: {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
