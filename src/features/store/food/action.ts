/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/index";
import { foods } from "@/lib/db/schema";

export async function createFoodWithForm(prevState: any, formData: FormData) {
  const storeId = formData.get("storeId") as string;

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
