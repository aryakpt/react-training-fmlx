import { Reducer } from "redux";
import { CommentListItemSchema, PostListItemSchema } from "../api";
import { PostActionTypes, PostActions } from "./postActions";

export interface PostState {
  posts: PostListItemSchema[];
  comments: CommentListItemSchema[];
}

const initialPostState: PostState = {
  posts: [],
  comments: [],
};

export const postReducer: Reducer<PostState, PostActions> = (
  state = initialPostState,
  action,
): PostState => {
  switch (action.type) {
    case PostActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.data,
      };
    case PostActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.data,
      };
    default:
      return state;
  }
};
