import axios, { AxiosResponse } from "axios";
import { setupAxios } from "src/common/libs";
import { CommentListItemSchema, PostListItemSchema } from "./schemas";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

const axiosPosts = setupAxios(axiosInstance);

export const postsApiClient = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getPosts(): Promise<AxiosResponse<PostListItemSchema[], any>> {
    const response = await axiosPosts.get("/");
    return response;
  },
  async getCommentsPost(
    postId: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<AxiosResponse<CommentListItemSchema[], any>> {
    const response = await axiosPosts.get(`/${postId}/comments`);
    return response;
  },
};
