import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    UsersModule,
    VideosModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
