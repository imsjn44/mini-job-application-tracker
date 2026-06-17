import { prisma } from "@/lib/prisma";

import sampleData from "./sample-data";

async function main() {
  await prisma.application.deleteMany();

  await prisma.application.createMany({ data: sampleData.applications } as any);
}

main();
