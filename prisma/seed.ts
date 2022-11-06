import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  const company = await prisma.company.upsert({
    where: { name: 'Test Company' },
    update: {},
    create: {
      name: 'Test Company',
      canonicalName: 'Test canonical Company',
      virgilId: 'ASD#@rwaf33@QEWDf344',
      aesKey: {},
      policies: {},
      reportTemplate: {},
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'example@example.com' },
    update: {},
    create: {
      cognitoId: 'ASDIGQYUG@IEui21u2rgb1fiasyf',
      email: 'example@example.com',
      name: 'example',
      companyId: company.id,
      role: 'example',
      virgilId: 'ASD#@rwaf33@QEWDf344',
      isAdmin: false,
    },
  });

  const group1 = await prisma.group.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Test Group',
      companyId: company.id,
      reportTemplate: {},
    },
  });

  const userGroup1 = await prisma.userGroup.upsert({
    where: { id: 1 },
    update: {},
    create: {
      groupId: group1.id,
      userId: user.id,
    },
  });

  const group2 = await prisma.group.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Test Group 2',
      companyId: company.id,
      reportTemplate: {},
    },
  });

  const userGroup2 = await prisma.userGroup.upsert({
    where: { id: 2 },
    update: {},
    create: {
      groupId: group2.id,
      userId: user.id,
    },
  });

  const video = await prisma.video.upsert({
    where: { vId: 'TESTvID' },
    update: {},
    create: {
      vId: 'TESTvID',
      userId: user.id,
      data: {},
    },
  });

  console.log({ post1, post2, company, user, video, userGroup1, userGroup2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });
