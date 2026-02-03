/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { User } from "@/generated/prisma/client";

const RegisterSchema = z.object({
  numberOfPeople: z.coerce.number(),
});

export async function createTicket(
  user: User,
  prevState: any,
  formData: FormData,
) {
  const validationResult = RegisterSchema.safeParse({
    numberOfPeople: formData.get("numberOfPeople"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: "入力形式が正しくありません",
      error: "入力形式が正しくありません", //仮実装
    };
  }

  const { numberOfPeople } = validationResult.data;
  const storeId = formData.get("storeId") as string;

  try {
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
      message: "サーバーエラーが発生しました",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function callTicket(ticketId: string) {
  try {
    await prisma.$transaction(async (tx) => {
      const fetchedTicket = await tx.ticket.findUnique({
        where: { id: ticketId },
      });

      if (!fetchedTicket) {
        return {
          success: false,
          message: "整理券が存在しません",
        };
      }

      if (fetchedTicket.status != "CALLED") {
        return {
          success: false,
          message: "整理券は呼び出されていません",
        };
      }
      await tx.ticket.update({
        where: { id: ticketId },
        data: { status: "COMPLETED" },
      });

      await tx.ticket.updateMany({
        where: {
          attractionId: fetchedTicket.attractionId,
          status: "ISSUED",
          index: {
            gt: fetchedTicket.index,
            lte: fetchedTicket.index + 3,
          },
        },
        data: {
          status: "CALLED",
        },
      });
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
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
