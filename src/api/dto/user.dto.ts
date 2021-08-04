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

interface UserAuthInput {
  username: string;
  password: string;
}

interface CreateUserInput {
  username: string;
  email: string;
  password: string;
}
