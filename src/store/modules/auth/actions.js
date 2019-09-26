import ActionNames from '../../actionNames';

export function signUpRequest(name, email, password) {
  return {
    type: ActionNames.AUTH_SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signUpSuccess() {
  return {
    type: ActionNames.AUTH_SIGN_UP_SUCCESS,
  };
}

export function signInRequest(email, password) {
  return {
    type: ActionNames.AUTH_SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: ActionNames.AUTH_SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: ActionNames.AUTH_SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: ActionNames.AUTH_SIGN_OUT,
  };
}
