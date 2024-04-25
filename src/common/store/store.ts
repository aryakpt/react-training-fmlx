import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";

import { AuthState, authReducer } from "src/contents/auth/store/authReducer";
import { LoadingState, loadingReducer } from "./loadingReducer";

export interface AppState {
  authReducer: AuthState;
  loadingReducer: LoadingState;
}

// Create the root reducer
const rootReducer = combineReducers({ authReducer, loadingReducer });

// Create a configure store function of type 'AppState'
export default function configureStore() {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk, logger),
  );
  return store;
}
