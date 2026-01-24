"use server";

import prisma from "@/lib/prisma";

export async function createAttraction(prevState: any, formData: FormData) {
  const storeId = formData.get("storeId") as string;

  await prisma.attraction.create({
    data: {
      storeId: storeId,
    },
  });
}
