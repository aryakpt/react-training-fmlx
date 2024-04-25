/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { setupAxios } from "src/common/libs";
import { CommentListItemSchema, PostListItemSchema } from "./schemas";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

setupAxios(axiosInstance);

export const postsApiClient = {
  getPosts(): Promise<AxiosResponse<PostListItemSchema[], any>> {
    return axiosInstance.get("/");
  },

  getCommentsPost(
    postId: number,
  ): Promise<AxiosResponse<CommentListItemSchema[], any>> {
    return axiosInstance.get(`/${postId}/comments`);
  },
};
