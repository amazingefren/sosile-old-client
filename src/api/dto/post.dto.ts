interface Post {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
}

interface CreatePostInput {
  content: string;
  authorId: number;
}
