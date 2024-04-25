import { Reducer } from "redux";
import { LoadingActionTypes, LoadingActions } from "./loadingActions";

export interface LoadingState {
  isLoading: boolean;
}

const initialLoadingState: LoadingState = {
  isLoading: false,
};

export const loadingReducer: Reducer<LoadingState, LoadingActions> = (
  state = initialLoadingState,
  action,
): LoadingState => {
  switch (action.type) {
    case LoadingActionTypes.SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case LoadingActionTypes.SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
