"use server";

import z, { success } from "zod";
import { db } from "@/index";
import { foods, items } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const RegisterSchema = z.object({
  name: z.string(),
  stock: z.coerce.number(),
  price: z.coerce.number(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createItem(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    name: formData.get("name"),
    stock: formData.get("stock"),
    price: formData.get("price"),
  });

  const storeId = formData.get("storeId") as string;

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
    const foodRows = await db
      .select({ id: foods.id })
      .from(foods)
      .where(eq(foods.storeId, storeId))
      .limit(1);
    const food = foodRows[0];

    if (!food) {
      return {
        success: false,
        message: "模擬店が存在しません。",
      };
    }

    await db.insert(items).values({
      name: name,
      stock: stock,
      foodId: food.id,
      price: price,
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
