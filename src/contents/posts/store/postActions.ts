/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import {
  CommentListItemSchema,
  PostListItemSchema,
  postsApiClient,
} from "../api";
import { loadingActions } from "src/common/store/loadingActions";

export enum PostActionTypes {
  SET_POSTS = "SET_POSTS",
  SET_COMMENTS = "SET_COMMENTS",
}

export interface ActionGetPosts {
  type: PostActionTypes.SET_POSTS;
  data: PostListItemSchema[];
}

export interface ActionGetComments {
  type: PostActionTypes.SET_COMMENTS;
  data: CommentListItemSchema[];
}

// Combine the action types with a union
export type PostActions = ActionGetPosts | ActionGetComments;

export const postActions = {
  getPosts(): any {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(loadingActions.setLoadingTrue());
        const response = await postsApiClient.getPosts();
        dispatch(loadingActions.setLoadingFalse());
        dispatch({ type: PostActionTypes.SET_POSTS, data: response.data });
      } catch (err) {
        console.log(err);
      }
    };
  },
  getCommentsByPostId(postId: number): any {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(loadingActions.setLoadingTrue());
        const response = await postsApiClient.getCommentsPost(postId);
        dispatch(loadingActions.setLoadingFalse());
        dispatch({ type: PostActionTypes.SET_COMMENTS, data: response.data });
      } catch (err) {
        console.log(err);
      }
    };
  },
};
