import "@testing-library/jest-dom";
import { renderWithProviders } from "src/common/libs/testUtils";
import PostList from "../index";

describe("PostList page unit tests", () => {
  it("should rendered correctly", () => {
    const { getByTestId } = renderWithProviders(<PostList />, {
      preloadedState: {
        postReducer: {
          posts: [
            {
              userId: 1,
              id: 1,
              title: "Test Title",
              body: "Test Body",
            },
          ],
          comments: [
            {
              postId: 0,
              id: 0,
              name: "",
              email: "",
              body: "",
            },
          ],
        },
      },
    });
    const postListPage = getByTestId("post-list-page");
    expect(postListPage).toBeInTheDocument();
  });
});
