import { useEffect, useState } from "react";
import { PostListItemSchema, postsApiClient } from "../../api";
import { useDispatch } from "react-redux";
import { loadingActions } from "src/common/store/loadingActions";
import { Table } from "src/components";

const PostList = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<PostListItemSchema[]>([]);

  const fetchPosts = async () => {
    dispatch(loadingActions.setLoadingTrue());
    const response = await postsApiClient.getPosts();
    dispatch(loadingActions.setLoadingFalse());
    setPosts(response.data);
  };

  const fetchComments = async (postId: number) => {
    dispatch(loadingActions.setLoadingTrue());
    const response = await postsApiClient.getCommentsPost(postId);
    console.log(response.data);

    dispatch(loadingActions.setLoadingFalse());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Table<PostListItemSchema>
        columns={[
          {
            title: "No",
            indexName: "no",
            render(_value, _record, index) {
              return index;
            },
          },
          { title: "User Id", indexName: "userId" },
          { title: "Id", indexName: "id" },
          { title: "Title", indexName: "title" },
          {
            title: "Body",
            indexName: "body",
            render(value) {
              return <p style={{ backgroundColor: "red" }}>{value}</p>;
            },
          },
        ]}
        data={posts}
        onRowClick={async (data) => {
          console.log(data);
          await fetchComments(data.id);
        }}
      />
    </div>
  );
};

export default PostList;
