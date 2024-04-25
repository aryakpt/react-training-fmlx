export interface PostListItemSchema {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface CommentListItemSchema {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
