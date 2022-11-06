import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GroupEntity } from './entities/group.entity';

@Controller('groups')
@ApiTags('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get('/options')
  @ApiOkResponse({
    description: 'Accessible videos',
    type: GroupEntity,
    isArray: true,
  })
  getCompanyGroupOptions(
    @Query('company_id', ParseIntPipe) companyId: number,
    @Query('user_group_id', ParseIntPipe) userGroupId: number,
  ) {
    return this.groupsService.findCompanyGroupOptions(userGroupId, companyId);
  }
}
