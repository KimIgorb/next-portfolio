import { prisma } from "./prisma-client";

async function up() {
  await prisma.projects.createMany({
    data: [
      {
        title: "Blanchard",
        image_url: "/projects/project1.png",
        skills: "HTML, CSS",
        github: "https://github.com/KimIgorb/blanchard",
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
        skills: "Vue, Vuex, Axios",
        github: "https://github.com/KimIgorb/weather-vue",
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
