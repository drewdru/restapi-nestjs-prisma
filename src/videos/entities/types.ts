import { User } from '../../users/entities/types';

export type Video = {
  id: number;
  vId: string;
  creator: User;
  data: object;
};
