/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";

//TODO 店舗作成に組み込む
export async function createFoodWithForm(prevState: any, formData: FormData) {
  const storeId = formData.get("storeId") as string;

  try {
    await prisma.food.create({
      data: {
        storeId: storeId,
      },
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
