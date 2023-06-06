import { Post } from '@prisma/client';

/*type Post = {
  id: number;
  title: string | null;
  content: string;
  userId: number;
}*/

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPostRepository {
  create(title: string, content: string, userId: number): Promise<Post>;
}