/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getDB } from "@/lib/db";
import { attractions, foods, stores, type StoreType } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import z from "zod";

const RegisterSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

export async function createStore(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { slug, name } = validationResult.data;
  const storeType = formData.get("storeType") as StoreType;
  const eventId = formData.get("eventId") as string;
  const db = await getDB();

  try {
    await db.transaction(async (tx) => {
      const createdStoreRows = await tx
        .insert(stores)
        .values({
          slug: slug,
          name: name,
          storeType: storeType,
          eventId: eventId,
        })
        .returning({ id: stores.id, storeType: stores.storeType });

      const createdStore = createdStoreRows[0];
      if (!createdStore) {
        throw new Error("店舗の作成に失敗しました");
      }

      switch (createdStore.storeType) {
        case "ATTRACTION":
          await tx.insert(attractions).values({
            storeId: createdStore.id,
          });
          break;
        case "FOOD":
          await tx.insert(foods).values({
            storeId: createdStore.id,
          });
          break;
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
      message: null,
      error: "サーバーエラーが発生しました",
    };
  }
}

const storeConfigSchema = z.object({
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date().nullable(),
  finishedAt: z.date().nullable(),
  description: z.string().nullable(),
});

export async function updateStoreConfig(prevState: any, formData: FormData) {
  const validationResult = storeConfigSchema.safeParse({
    name: formData.get("name"),
    isActive: formData.get("isActive") === "true",
    startedAt: formData.get("startedAt")
      ? new Date(formData.get("startedAt") as string)
      : null,
    finishedAt: formData.get("finishedAt")
      ? new Date(formData.get("finishedAt") as string)
      : null,
    description: formData.get("description")
      ? (formData.get("description") as string)
      : null,
  });
  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }
  const { name, isActive, startedAt, finishedAt, description } =
    validationResult.data;

  const storeId = formData.get("storeId") as string;
  const db = await getDB();
  try {
    await db
      .update(stores)
      .set({
        name: name,
        isActive: isActive,
        startedAt: startedAt,
        finishedAt: finishedAt,
        description: description,
      })
      .where(eq(stores.id, storeId));
    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました",
    };
  }
}
