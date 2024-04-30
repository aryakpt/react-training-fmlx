import "@testing-library/jest-dom";
import axios from "axios";
import { CommentListItemSchema, PostListItemSchema } from "../schemas";
import { postsApiClient } from "../endpoints";

jest.mock("axios");
jest.mock("src/common/libs/axios", () => ({
  setupAxios: jest.fn(() => axios as jest.Mocked<typeof axios>),
}));

describe("postsApiClient", () => {
  let mockedAxios: jest.Mocked<typeof axios>;
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getPosts", () => {
    it("should fetch posts successfully", async () => {
      const mockPosts: PostListItemSchema[] = [
        {
          userId: 1,
          id: 1,
          title: "Test Title",
          body: "Test Body",
        },
      ];
      const mockResponse = { data: mockPosts, status: 200 };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);
      const response = await postsApiClient.getPosts();
      expect(mockedAxios.get).toHaveBeenCalled();
      expect(response.status).toBe(200);
      expect(response.data).toEqual(mockPosts);
    });
  });

  describe("getCommentsPost", () => {
    it("should fetch comments successfully", async () => {
      const mockPostId = 1;
      const commentsMocks: CommentListItemSchema[] = [
        {
          postId: 1,
          id: 1,
          name: "Test Title",
          body: "Test Body",
          email: "test@gmail.com",
        },
      ];
      const mockResponse = { data: commentsMocks, status: 200 };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const response = await postsApiClient.getCommentsPost(mockPostId);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(commentsMocks);
    });
  });
});
