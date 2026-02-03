/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import z from "zod";
import { StoreType } from "@/generated/prisma/enums";
import { revalidatePath } from "next/cache";

const RegisterSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

//TODO eventId?の紐づけ
export async function createStore(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: "入力形式が正しくありません",
      error: "入力形式が正しくありません", //仮実装
    };
  }

  const { slug, name } = validationResult.data;
  const storeType = formData.get("storeType") as StoreType;

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
      message: "サーバーエラーが発生しました",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function updateStoreEventId(
  storeId: string,
  prevState: any,
  formData: FormData,
) {
  const eventId = formData.get("eventId") as string;

  try {
    await prisma.store.update({
      where: { id: storeId },
      data: { eventId },
    });
  } catch (error) {
    return {
      success: false,
      message: "サーバーエラーが発生しました",
      error: error instanceof Error ? error.message : String(error),
    };
  }

  revalidatePath(`/admin/store/${storeId}`);
  redirect(`/admin/store/${storeId}`);
}
