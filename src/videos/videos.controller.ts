import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VideoEntity } from './entities/video.entity';

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
  getUserGroupAccessibleVideos(
    @Query('user_group_id', ParseIntPipe) userGroupId: number,
    @Query('company_id', ParseIntPipe) companyId: number,
  ) {
    return this.videosService.findUserGroupAccessibleVideos(
      userGroupId,
      companyId,
    );
  }
}
