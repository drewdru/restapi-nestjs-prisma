import { User } from 'src/users/types/types';

export type Video = {
  id: number;
  vId: string;
  creator: User;
  data: object;
};
