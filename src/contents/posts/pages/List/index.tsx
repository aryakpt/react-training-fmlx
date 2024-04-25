import { useEffect, useState } from "react";
import { PostListItemSchema, postsApiClient } from "../../api";

const PostList = () => {
  const [posts, setPosts] = useState<PostListItemSchema[]>([]);

  const fetchPosts = async () => {
    const response = await postsApiClient.getPosts();
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
