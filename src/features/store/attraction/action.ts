/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import z from "zod";

export async function createAttraction(prevState: any, formData: FormData) {
  const storeId = formData.get("storeId") as string;

  try {
    await prisma.attraction.create({
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
      message: "サーバーエラーが発生しました",
      error: "サーバーエラーが発生しました。",
    };
  }
}

const updateAttractionConfigSchema = z.object({
  playTime: z.coerce.number(),
  peopleCapacity: z.coerce.number(),
});

export async function updateAttractionConfig(
  attractionId: string,
  prevState: any,
  formData: FormData,
) {
  const validationResult = updateAttractionConfigSchema.safeParse({
    playTime: formData.get("playTime"),
    peopleCapacity: formData.get("peopleCapacity"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: "入力形式が正しくありません",
      error: "入力形式が正しくありません", //仮実装
    };
  }

  const { playTime, peopleCapacity } = validationResult.data;

  try {
    await prisma.attraction.update({
      where: {
        id: attractionId,
      },
      data: {
        playTime: playTime,
        peopleCapacity: peopleCapacity,
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
      message: "サーバーエラーが発生しました",
      error: "サーバーエラーが発生しました。",
    };
  }
}
