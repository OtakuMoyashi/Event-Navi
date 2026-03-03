"use server";

import prisma from "@/lib/prisma";
import z from "zod";

const CreateStockLogSchema = z.object({
  itemId: z.string(),
  difference: z.coerce.number(),
});

//TODO stockが負になるときの実装する
export default async function createStockLog(
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
      error: "入力形式が正しくありません",
    };
  }

  const { itemId, difference } = validationResult.data;

  try {
    await prisma.$transaction(async (tx) => {
      await tx.stockLog.create({
        data: {
          itemId: itemId,
          difference: difference,
        },
      });
      await tx.item.update({
        where: { id: itemId },
        data: {
          stock: { increment: difference },
        },
      });
    });

    return {
      success: true,
      message: "在庫の更新が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "サーバーエラーが発生しました。",
    };
  }
}
