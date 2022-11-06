import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/types';
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
