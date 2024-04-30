import "@testing-library/jest-dom";
import axios from "axios";
import { PostListItemSchema } from "../schemas";
import { postsApiClient } from "../endpoints";

jest.mock("axios");
jest.mock("src/common/libs/axios", () => ({
  setupAxios: jest.fn(),
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
      expect(response.status).toBe(200);
      expect(response.data).toEqual(mockPosts);
    });
  });
});
