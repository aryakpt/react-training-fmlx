import axios from "axios";
import { postsApiClient } from "../endpoints";
import { PostListItemSchema } from "../schemas";

jest.mock("axios", () => {
  return {
    create: () => {
      return {
        interceptors: {
          request: { eject: jest.fn(), use: jest.fn() },
          response: { eject: jest.fn(), use: jest.fn() },
        },
      };
    },
  };
});

describe("postsApiClient", () => {
  // let axiosInstance: AxiosInstance;
  // beforeEach(() => {
  //   axiosInstance = axios.create({});
  //   // jest.clearAllMocks();
  // });

  it("getPosts should return a succesful response", async () => {
    const mockPosts: PostListItemSchema[] = [
      {
        userId: 1,
        id: 1,
        title: "Test Title",
        body: "Test Body",
      },
    ];

    (axios.get as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: mockPosts,
    });

    const response = await postsApiClient.getPosts();

    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockPosts);
  });
});
