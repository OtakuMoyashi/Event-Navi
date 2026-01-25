/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { StoreInputSchema } from "../../../prisma/generated/schemas";

const RegisterSchema = StoreInputSchema.omit({
  id: true,
  isActive: true,
  createdAt: true,
  finishedAt: true,
});

export async function createStore(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    storeType: formData.get("storeType"),
  });

  if (!validationResult.success) {
    return {
      success: false,
      message: "入力形式が正しくありません。",
      error: validationResult.error,
    };
  }

  const { slug, name, storeType } = validationResult.data;

  try {
    await prisma.store.create({
      data: {
        slug: slug,
        name: name,
        storeType: storeType,
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
