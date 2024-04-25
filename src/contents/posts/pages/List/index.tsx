import { useEffect, useState } from "react";
import { PostListItemSchema, postsApiClient } from "../../api";
import { useDispatch } from "react-redux";
import { loadingActions } from "src/common/store/loadingActions";

const PostList = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<PostListItemSchema[]>([]);

  const fetchPosts = async () => {
    dispatch(loadingActions.setLoadingTrue());
    const response = await postsApiClient.getPosts();
    dispatch(loadingActions.setLoadingFalse());
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default PostList;
