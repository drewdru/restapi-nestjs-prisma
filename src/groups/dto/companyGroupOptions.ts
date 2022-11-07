import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsEnum } from 'class-validator';
import { Roles } from 'src/users/enums/users.enum';

export class GetCompanyGroupOptionsDto {
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

  @IsEnum(Roles)
  @IsNotEmpty()
  @ApiProperty({ required: true, default: Roles.anonymous, type: Roles })
  userRole: Roles;
}
