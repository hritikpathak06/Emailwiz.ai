import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  // log: ["query"],
});

async function main() {
  // console.log("Database Connecting");
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
