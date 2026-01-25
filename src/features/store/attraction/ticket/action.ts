/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";
import { TicketInputSchema } from "../../../../../prisma/generated/schemas";
import { getCurrentUser } from "@/features/auth/user/action";
import prisma from "@/lib/prisma";

const TicketCreateSchema = TicketInputSchema.omit({
  id: true,
  status: true,
  userId: true,
  attractionId: true,
  createdAt: true,
  updatedAt: true,
});

const RegisterSchema = TicketCreateSchema.extend({
  storeId: z.string(),
});

export async function createTicket(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    index: formData.get("index"),
    numberOfPeople: formData.get("numberOfPeople"),
    storeId: formData.get("storeId"),
  });

  if (!validationResult.success) {
    return {
      error: validationResult.error,
      message: "入力形式が正しくありません",
    };
  }

  const { index, numberOfPeople, storeId } = validationResult.data;

  try {
    const user = await getCurrentUser();

    if (!user) {
      return {
        success: false,
        message: "匿名ユーザーが登録されていません。",
      };
    }

    const attraction = await prisma.attraction.findUnique({
      where: {
        storeId: storeId,
      },
      select: {
        id: true,
      },
    });

    if (!attraction) {
      return {
        success: false,
        message: "企画が存在しません。",
      };
    }

    await prisma.ticket.create({
      data: {
        index: index,
        numberOfPeople: numberOfPeople,
        status: "ISSUED",
        attractionId: attraction.id,
        userId: user.id,
      },
    });

    return {
      success: true,
      message: "整理券の発行が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました。",
    };
  }
}
