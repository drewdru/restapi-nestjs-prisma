import { User } from 'src/users/types/users';

export type Video = {
  id: number;
  vId: string;
  creator: User;
  data: object;
};
