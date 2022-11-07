import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}

  async findUserGroupAccessibleVideos(
    userGroupId: number,
    companyId: number,
    userIsAdmin = false,
  ) {
    return await this.prisma.video.findMany({
      where: {
        AND: [
          {
            creator: { companyId: { equals: companyId } },
          },
          {
            OR: [
              // { creator: { isAdmin: true } },
              userIsAdmin
                ? {}
                : {
                    creator: {
                      groups: { some: { groupId: { equals: userGroupId } } },
                    },
                  },
            ],
          },
        ],
      },
      // include: {
      //   creator: { include: { groups: true } },
      // },
    });
  }
}
