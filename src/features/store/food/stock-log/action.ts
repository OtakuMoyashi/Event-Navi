"use server";

import { items, stockLogs } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import z from "zod";
import { getDb } from "@/lib/db";

const CreateStockLogSchema = z.object({
  itemId: z.string(),
  difference: z.coerce.number(),
});

//TODO stockが負になるときの実装する
export default async function createStockLog(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
) {
  const validationResult = CreateStockLogSchema.safeParse({
    itemId: formData.get("itemId"),
    difference: formData.get("difference"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { itemId, difference } = validationResult.data;
  const db = await getDb();
  try {
    await db.transaction(async (tx) => {
      await tx.insert(stockLogs).values({
        itemId: itemId,
        difference: difference,
      });

      await tx
        .update(items)
        .set({ stock: sql`${items.stock} + ${difference}` })
        .where(eq(items.id, itemId));
    });

    return {
      success: true,
      message: "在庫の更新が完了しました。",
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
