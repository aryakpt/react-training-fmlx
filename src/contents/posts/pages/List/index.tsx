import { useCallback, useEffect } from "react";
import { CommentListItemSchema, PostListItemSchema } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "src/components";
import { PostState, postActions } from "../../store";
import { AppState } from "src/common/store/store";

import styles from "./List.module.scss";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, comments } = useSelector<AppState, PostState>(
    (state) => state.postReducer,
  );

  useEffect(() => {
    dispatch(postActions.getPosts());
  }, [dispatch]);

  const getComments = useCallback((id: number) => {
    dispatch(postActions.getCommentsByPostId(id));
  }, []);

  return (
    <div className={styles.post}>
      <div className={styles.postList}>
        <h3>Post</h3>
        <Table<PostListItemSchema>
          columns={[
            { title: "User Id", indexName: "userId" },
            { title: "Id", indexName: "id" },
            { title: "Title", indexName: "title" },
            {
              title: "Body",
              indexName: "body",
              render(value) {
                return <p>{value}</p>;
              },
            },
          ]}
          data={posts}
          onRowClick={(post) => getComments(post.id)}
        />
      </div>
      <div className={styles.commentList}>
        <h3>Comment Post Id: {comments?.[0]?.postId}</h3>
        <Table<CommentListItemSchema>
          columns={[
            { title: "Name", indexName: "name" },
            { title: "Email", indexName: "email" },
            {
              title: "Body",
              indexName: "body",
              render(value) {
                return <p>{value}</p>;
              },
            },
          ]}
          data={comments}
        />
      </div>
    </div>
  );
};

export default PostList;
