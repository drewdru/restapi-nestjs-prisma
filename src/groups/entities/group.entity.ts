import { ApiProperty } from '@nestjs/swagger';
import { Group } from './types';

export class GroupEntity implements Group {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  companyId: number;

  @ApiProperty()
  reportTemplate: object;
}
