import { Controller, Get, Query } from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VideoEntity } from './entities/videos.entity';
import { GetUserGroupAccessibleVideos } from './dto/userGroupAccessibleVideos';
@Controller('videos')
@ApiTags('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get('/user_group_accessible')
  @ApiOkResponse({
    description: 'Accessible videos',
    type: VideoEntity,
    isArray: true,
  })
  async getUserGroupAccessibleVideos(
    @Query() query: GetUserGroupAccessibleVideos,
  ) {
    return await this.videosService.findUserGroupAccessibleVideos(
      query.userGroupId,
      query.companyId,
      query.userIsAdmin,
    );
  }
}
