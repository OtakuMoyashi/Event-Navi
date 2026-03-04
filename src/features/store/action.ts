/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import z from "zod";
import { StoreType } from "@/generated/prisma/enums";
import { is } from "zod/v4/locales";

const RegisterSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

export async function createStore(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { slug, name } = validationResult.data;
  const storeType = formData.get("storeType") as StoreType;
  const eventId = formData.get("eventId") as string;

  try {
    await prisma.$transaction(async (tx) => {
      const createdStore = await tx.store.create({
        data: {
          slug: slug,
          name: name,
          storeType: storeType,
          eventId: eventId,
        },
      });
      switch (createdStore.storeType) {
        case "ATTRACTION":
          await tx.attraction.create({
            data: {
              storeId: createdStore.id,
            },
          });
        case "FOOD":
          await tx.food.create({
            data: {
              storeId: createdStore.id,
            },
          });
      }
    });

    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました",
    };
  }
}

const storeConfigSchema = z.object({
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date().nullable(),
  finishedAt: z.date().nullable(),
  description: z.string().nullable(),
});

export async function updateStoreConfig(
  storeId: string,
  prevState: any,
  formData: FormData,
) {
  const validationResult = storeConfigSchema.safeParse({
    name: formData.get("name"),
    isActive: formData.get("isActive") === "true",
    startedAt: formData.get("startedAt")
      ? new Date(formData.get("startedAt") as string)
      : null,
    finishedAt: formData.get("finishedAt")
      ? new Date(formData.get("finishedAt") as string)
      : null,
    description: formData.get("description")
      ? (formData.get("description") as string)
      : null,
  });
  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: null,
      error: "入力形式が正しくありません",
    };
  }
  const { name, isActive, startedAt, finishedAt, description } =
    validationResult.data;
  try {
    await prisma.store.update({
      where: { id: storeId },
      data: {
        name: name,
        isActive: isActive,
        startedAt: startedAt,
        finishedAt: finishedAt,
        description: description,
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
      message: null,
      error: "サーバーエラーが発生しました",
    };
  }
}
