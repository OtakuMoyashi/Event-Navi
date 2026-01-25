/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";
import { TicketInputSchema } from "../../../../../prisma/generated/schemas";
import { getCurrentUser } from "@/features/auth/user/action";
import prisma from "@/lib/prisma";

const TicketCreateSchema = TicketInputSchema.omit({
  id: true,
  status: true,
  index: true,
  userId: true,
  attractionId: true,
  createdAt: true,
  updatedAt: true,
});

const RegisterSchema = TicketCreateSchema.extend({
  index: z.coerce.number(),
  numberOfPeople: z.coerce.number(),
  storeId: z.string(),
});

export async function createTicket(prevState: any, formData: FormData) {
  const validationResult = RegisterSchema.safeParse({
    numberOfPeople: formData.get("numberOfPeople"),
    storeId: formData.get("storeId"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      error: validationResult.error,
      message: "入力形式が正しくありません",
    };
  }

  const { numberOfPeople, storeId } = validationResult.data;

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

    await prisma.$transaction(async (tx) => {
      const ticketCount: number = await tx.ticket.count({
        where: {
          attractionId: attraction.id,
        },
      });

      const nextIndex: number = ticketCount + 1;

      await tx.ticket.create({
        data: {
          index: nextIndex,
          numberOfPeople: numberOfPeople,
          status: "ISSUED",
          attractionId: attraction.id,
          userId: user.id,
        },
      });
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
