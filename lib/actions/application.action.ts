"use server";
import { prisma } from "@/lib/prisma";
import { APPLICATIONS_LIMIT, convertToPlainObject } from "../constants/utils";
import { revalidatePath } from "next/cache";
import z from "zod";
import { insertApplicationSchema, updateApplicationSchema } from "../validator";

export async function getApplications(
  page: number,
  APPLICATIONS_LIMIT: number,
) {
  const data = await prisma.application.findMany({
    skip: (page - 1) * APPLICATIONS_LIMIT,
    take: APPLICATIONS_LIMIT,
    orderBy: { created_at: "desc" },
  });

  const total = await prisma.application.count();
  return {
    data: convertToPlainObject(data),
    totalPages: Math.ceil(total / APPLICATIONS_LIMIT),
  };
}

export async function deleteApplication(id: string) {
  await prisma.application.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
}

export async function createApplication(
  data: z.infer<typeof insertApplicationSchema>,
) {
  try {
    const application = insertApplicationSchema.parse(data);
    await prisma.application.create({ data: application });

    revalidatePath("/");
    return {
      success: true,
      message: "Application created successfully",
    };
  } catch (error) {
    return { success: false, message: error };
  }
}

export async function updateApplication(
  data: z.infer<typeof updateApplicationSchema>,
) {
  try {
    const application = updateApplicationSchema.parse(data);
    const applicationExists = await prisma.application.findFirst({
      where: {
        id: application.id,
      },
    });
    if (!applicationExists) throw new Error("Application not found");
    await prisma.application.update({
      where: { id: application.id },
      data: application,
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Application created successfully",
    };
  } catch (error) {
    return { success: false, message: error };
  }
}
