/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getDb } from "@/lib/db";
import { attractions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import z from "zod";

export async function createAttraction(prevState: any, formData: FormData) {
  const storeId = formData.get("storeId") as string;

  try {
    const db = await getDb();
    await db.insert(attractions).values({
      storeId: storeId,
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
      error: "サーバーエラーが発生しました。",
    };
  }
}

const updateAttractionConfigSchema = z.object({
  playTime: z.coerce.number(),
  peopleCapacity: z.coerce.number(),
});

export async function updateAttractionConfig(
  prevState: any,
  formData: FormData,
) {
  const validationResult = updateAttractionConfigSchema.safeParse({
    playTime: formData.get("playTime"),
    peopleCapacity: formData.get("peopleCapacity"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { playTime, peopleCapacity } = validationResult.data;
  const attractionId = formData.get("attractionId") as string;

  try {
    const db = await getDb();
    await db
      .update(attractions)
      .set({
        playTime: playTime,
        peopleCapacity: peopleCapacity,
      })
      .where(eq(attractions.id, attractionId));
    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}
