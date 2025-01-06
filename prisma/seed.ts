import { prisma } from "./prisma-client";

async function up() {
  await prisma.projects.createMany({
    data: [
      {
        title: "Recipes App",
        image_url: "/projects/project1.png",
        skills: "Next Js, TS, Tailwind CSS, Prisma",
        github: "https://recipes-psi-six.vercel.app",
      },
      {
        title: "Orders Management",
        image_url: "/projects/project2.png",
        skills: "React, TS, Redux Toolkit, RTKQuery, Materials UI",
        github: "https://github.com/KimIgorb/orders-management",
      },
      {
        title: "Cast Base",
        image_url: "/projects/project3.png",
        skills: "React, TS, React-router, Tailwind",
        github: "https://github.com/KimIgorb/cast-base",
      },
      {
        title: "Weather App",
        image_url: "/projects/project4.png",
        skills: "Next JS, TS, Tailwind CSS",
        github: "https://github.com/KimIgorb/weather",
      },
    ],
  });

  await prisma.theme.create({
    data: {
      mode: "light",
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Projects" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
