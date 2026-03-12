/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { foods } from "@/lib/db/schema";
import { getDB } from "@/lib/db";

export async function createFoodWithForm(prevState: any, formData: FormData) {
  const storeId = formData.get("storeId") as string;
  const db = await getDB();
  try {
    await db.insert(foods).values({
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
