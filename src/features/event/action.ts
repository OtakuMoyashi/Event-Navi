/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import z from "zod";

const CreateEventSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

export async function createEvent(prevState: any, formData: FormData) {
  try {
    const validationResult = CreateEventSchema.safeParse({
      slug: formData.get("slug"),
      name: formData.get("name"),
    });

    if (!validationResult.success) {
      return {
        success: false,

        validationError: validationResult.error,
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
      error: "サーバーエラーが発生しました。",
    };
  }
}
