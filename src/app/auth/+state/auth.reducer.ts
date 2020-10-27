import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../data-models/user';

export interface AuthData {
  loading: boolean;
  user: User;
  error?: Error;
}
export interface AuthState {
  readonly auth: AuthData;
}

export const initialState: AuthData = {
  user: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions
): AuthData {
  switch (action.type) {
    case AuthActionTypes.Login:
      return { ...state, loading: true };

    case AuthActionTypes.LoginSuccess: {
      return { ...state, user: action.payload, loading: false };
    }
    case AuthActionTypes.LoginFail: {
      // return { ...state, error: action.payload.error, loading: false };
      return { ...state, user: null, loading: false };
    }
    default:
      return state;
  }
}
