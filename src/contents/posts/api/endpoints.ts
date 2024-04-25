import axios, { AxiosResponse } from "axios";
import { setupAxios } from "src/common/libs";
import { PostListItemSchema } from "./schemas";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

setupAxios(axiosInstance);

export const postsApiClient = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPosts(): Promise<AxiosResponse<PostListItemSchema[], any>> {
    return axiosInstance.get("/posts");
  },
};
