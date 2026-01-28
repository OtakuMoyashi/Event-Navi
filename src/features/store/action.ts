/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { StoreInputSchema } from "../../../prisma/generated/schemas";

const RegisterSchema = StoreInputSchema.omit({
  id: true,
  isActive: true,
  staffs: true,
  admins: true,
  createdAt: true,
  updatedAt: true,
});

export async function createStore(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    storeType: formData.get("storeType"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: "入力形式が正しくありません。",
      error: validationResult.error,
    };
  }

  const { slug, name, storeType } = validationResult.data;

  try {
    await prisma.$transaction(async (tx) => {
      const createdStore = await tx.store.create({
        data: {
          slug: slug,
          name: name,
          storeType: storeType,
        },
      });
      switch (createdStore.storeType) {
        case "ATTRACTION":
          await tx.attraction.create({
            data: {
              storeId: createdStore.id,
            },
          });
        case "FOOD":
          await tx.food.create({
            data: {
              storeId: createdStore.id,
            },
          });
      }
    });

    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました。",
    };
  }
}
