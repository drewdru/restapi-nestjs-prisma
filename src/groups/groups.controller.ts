import { Controller, Get, Query } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GroupEntity } from './entities/group.entity';
import { GetCompanyGroupOptionsDto } from './dto/companyGroupOptions';

@Controller('groups')
@ApiTags('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get('/options')
  // @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse({
    description: 'Accessible videos',
    type: GroupEntity,
    isArray: true,
  })
  async getCompanyGroupOptions(@Query() query: GetCompanyGroupOptionsDto) {
    return await this.groupsService.findCompanyGroupOptions(
      query.userGroupId,
      query.companyId,
      query.userRole,
    );
  }
}
