import { User } from "../interfaces";

export enum AuthActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

// Interface for Get All Action Type
export interface AuthSetCurrentUser {
  type: AuthActionTypes.SET_CURRENT_USER;
  data: User;
}

// Combine the action types with a union
export type AuthActions = AuthSetCurrentUser;

export const authActions = {
  setCurrentUser(user: User) {
    return {
      type: AuthActionTypes.SET_CURRENT_USER,
      data: user,
    };
  },
};
