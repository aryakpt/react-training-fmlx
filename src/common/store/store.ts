import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import { authReducer } from "src/contents/auth/store/authReducer";
import { loadingReducer } from "./loadingReducer";
import { postReducer } from "src/contents/posts/store";

// Create the root reducer
const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  postReducer,
});

// Create a configure store function of type 'AppState'
export default function configureStore(preloadedState?: Partial<AppState>) {
  const store = createStore(
    rootReducer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    preloadedState as any,
    applyMiddleware(thunk),
  );
  return store;
}

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];
