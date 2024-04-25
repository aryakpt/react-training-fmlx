import { User } from "../interfaces";
import { Reducer } from "redux";
import { AuthActionTypes, AuthActions } from "./authActions";

export interface AuthState {
  user: User;
}

const initialAuthState: AuthState = {
  user: {
    username: "",
    password: "",
    name: "",
    city: "",
    avatar: "",
  },
};

export const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialAuthState,
  action,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};
