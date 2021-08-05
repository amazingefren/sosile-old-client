interface User {
  id: number;
  email: string;
  username: string;
  posts: Post[] | null[];
  joinDate: Date;
}

interface UserUniqueInput {
  id: number;
  username?: string;
}

interface LoginInput {
  username: string;
  password: string;
}

interface RegisterInput {
  username: string;
  email: string;
  password: string;
}
