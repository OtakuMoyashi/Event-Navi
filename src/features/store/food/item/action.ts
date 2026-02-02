"use server";

import z from "zod";
import prisma from "@/lib/prisma";

const RegisterSchema = z.object({
  name: z.string(),
  stock: z.coerce.number(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createItem(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    name: formData.get("name"),
    stock: formData.get("stock"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      error: validationResult.error,
      message: "入力形式が正しくありません",
    };
  }

  const { name, stock } = validationResult.data;
  const storeId = formData.get("storeId") as string;

  try {
    const food = await prisma.food.findUnique({
      where: {
        storeId: storeId,
      },
      select: {
        id: true,
      },
    });

    if (!food) {
      return {
        success: false,
        message: "模擬店が存在しません。",
      };
    }

    await prisma.item.create({
      data: {
        name: name,
        stock: stock,
        foodId: food.id,
      },
    });

    return {
      success: true,
      message: "商品の登録が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました。",
    };
  }
}
