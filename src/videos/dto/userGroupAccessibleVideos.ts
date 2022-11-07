import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';

export class GetUserGroupAccessibleVideos {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ required: true, default: 1 })
  companyId: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ required: true, default: 1 })
  userGroupId: number;

  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Boolean)
  @ApiProperty({ required: true, default: false })
  userIsAdmin: boolean;
}
