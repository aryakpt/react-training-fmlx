import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import { AuthState, authReducer } from "src/contents/auth/store/authReducer";
import { LoadingState, loadingReducer } from "./loadingReducer";
import { PostState, postReducer } from "src/contents/posts/store";

export interface AppState {
  authReducer: AuthState;
  loadingReducer: LoadingState;
  postReducer: PostState;
}

// Create the root reducer
const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  postReducer,
});

// Create a configure store function of type 'AppState'
export default function configureStore() {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
