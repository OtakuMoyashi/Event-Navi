/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { EventInputSchema } from "../../../prisma/generated/schemas";

const CreateEventSchema = EventInputSchema.omit({
  id: true,
  isActive: true,
  startedAt: true,
  finishedAt: true,
  description: true,
  createdAt: true,
  updatedAt: true,
  //TODO 紐づけ実装とAdminのSignInから情報取得
  admins: true,
  stores: true,
});

export async function createEvent(prevState: any, formData: FormData) {
  try {
    const validationResult = CreateEventSchema.safeParse({
      slug: formData.get("slug"),
      name: formData.get("name"),
    });

    if (!validationResult.success) {
      console.log(validationResult.error);
      return {
        success: false,
        message: "入力形式が正しくありません。",
      };
    }

    const { slug, name } = validationResult.data;

    await prisma.event.create({
      data: {
        slug: slug,
        name: name,
      },
    });
    return {
      success: true,
      message: "イベントの作成が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました。",
    };
  }
}
