import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async findCompanyGroupOptions(userGroupId: number, companyId: number) {
    const result = await this.prisma.$queryRaw<
      Array<{
        groups: {
          label: string;
          value: number;
          key: number;
        };
      }>
    >`
      SELECT ARRAY_AGG(JSON_BUILD_OBJECT(
        'label', groupdata.label,
        'value', groupdata.value,
        'key', groupdata.key)
      ) AS groups
      FROM (
        SELECT groups.name as label, groups.id as value, ROW_NUMBER () OVER (ORDER BY groups.id ASC) as key
        FROM groups 
        INNER JOIN user_group ON user_group.group_id = groups.id
        INNER JOIN users ON user_group.user_id = users.id
        WHERE groups.company_id::bigint = ${companyId} AND (
          groups.id::bigint = ${userGroupId}
          OR users.role = 'admin'
        ) ORDER BY groups.name ASC
      ) as groupdata
    `;
    return result.length ? result[0] : { groups: [] };
  }
}