import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/types/users';
import { Video } from '../types/videos';

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
