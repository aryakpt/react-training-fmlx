export enum LoadingActionTypes {
  SET_LOADING_TRUE = "SET_LOADING_TRUE",
  SET_LOADING_FALSE = "SET_LOADING_FALSE",
}

export interface LoadingSetTrue {
  type: LoadingActionTypes.SET_LOADING_TRUE;
}

export interface LoadingSetFalse {
  type: LoadingActionTypes.SET_LOADING_FALSE;
}

// Combine the action types with a union
export type LoadingActions = LoadingSetTrue | LoadingSetFalse;

export const loadingActions = {
  setLoadingTrue() {
    return {
      type: LoadingActionTypes.SET_LOADING_TRUE,
    };
  },

  setLoadingFalse() {
    return {
      type: LoadingActionTypes.SET_LOADING_FALSE,
    };
  },
};
