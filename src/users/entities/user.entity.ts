import { ApiProperty } from '@nestjs/swagger';
import { User } from '../types/types';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  cognitoId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  companyId: number;

  @ApiProperty()
  role: string;

  @ApiProperty()
  virgilId: string;
}
