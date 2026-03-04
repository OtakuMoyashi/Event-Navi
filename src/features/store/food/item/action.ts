"use server";

import z, { success } from "zod";
import prisma from "@/lib/prisma";

const RegisterSchema = z.object({
  name: z.string(),
  stock: z.coerce.number(),
  price: z.coerce.number(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createItem(
  storeId: string,
  prevState: any,
  formData: FormData,
) {
  const validationResult = RegisterSchema.safeParse({
    name: formData.get("name"),
    stock: formData.get("stock"),
    price: formData.get("price"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { name, stock, price } = validationResult.data;

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
        price: price,
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
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}
