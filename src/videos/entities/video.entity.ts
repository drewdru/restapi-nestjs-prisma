import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/types/types';
import { Video } from './types';

export class VideoEntity implements Video {
  @ApiProperty()
  id: number;

  @ApiProperty()
  vId: string;

  @ApiProperty()
  creator: User;

  @ApiProperty()
  data: object;
}
