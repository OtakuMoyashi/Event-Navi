/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { TicketStatus } from "@/generated/prisma/enums";
import { send } from "node:process";
import { sendPushNotification } from "@/features/push/action";

const RegisterSchema = z.object({
  numberOfPeople: z.coerce.number(),
});

export async function createTicket(
  userId: string,
  isPaper: boolean,
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

      error: "入力形式が正しくありません",
    };
  }

  const { numberOfPeople } = validationResult.data;
  const storeId = formData.get("storeId") as string;

  try {
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
          userId: userId,
          isPaper: isPaper,
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
      error: "サーバーエラーが発生しました。",
    };
  }
}

const CallFirstTicketSchema = z.object({
  count: z.coerce.number().int().positive(),
});
export async function callFirstTicket(
  attractionId: string,
  prevState: any,
  formData: FormData,
) {
  const validationResult = CallFirstTicketSchema.safeParse({
    count: formData.get("count"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,

      error: "入力形式が正しくありません",
    };
  }

  const { count } = validationResult.data;
  try {
    await prisma.$transaction(async (tx) => {
      const issuedCount = await tx.ticket.count({
        where: {
          attractionId: attractionId,
          status: "ISSUED",
        },
      });
      const limitedCount = Math.min(count, issuedCount);
      if (limitedCount === 0) {
        return {
          success: false,
          message: "呼び出す整理券がありません。",
        };
      }
      const tickets = await tx.ticket.findMany({
        where: {
          attractionId: attractionId,
          status: "ISSUED",
        },
        orderBy: {
          index: "asc",
        },
        take: limitedCount,
        select: { id: true },
      });
      const ids = tickets.map((t) => t.id);

      const calledTickets = await tx.ticket.findMany({
        where: {
          id: { in: ids },
        },
        select: { id: true, userId: true, index: true },
      });

      await tx.ticket.updateMany({
        where: {
          id: { in: ids },
        },
        data: {
          status: "CALLED",
        },
      });

      for (const ticket of calledTickets) {
        const sub = await tx.pushSubscription.findFirst({
          where: {
            userId: ticket.userId,
          },
        });
        if (sub) {
          await sendPushNotification(
            sub,
            "整理券が呼び出されました",
            `あなたの整理券（番号: ${ticket.index}）が呼び出されました。順番までお待ちください。`,
          );
        }
      }

      return {
        success: true,
        message: `${ids.length}件の整理券を呼び出しました。`,
      };
    });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "サーバーエラーが発生しました。",
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
      error: "サーバーエラーが発生しました。",
    };
  }
}

export async function cancelTicket(ticketId: string) {
  try {
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { status: "CANCELED" },
    });
    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "サーバーエラーが発生しました。",
    };
  }
}

export async function fetchTicketsByStatus(
  storeId: string,
  status: TicketStatus | null,
) {
  try {
    const attraction = await prisma.attraction.findUnique({
      where: {
        storeId: storeId,
      },
      select: {
        id: true,
      },
    });
    if (!attraction) {
      return;
    }
    const tickets = await prisma.ticket.findMany({
      where: {
        attractionId: attraction.id,
        status: status ? status : undefined,
      },
    });
    return {
      success: true,
      tickets: tickets,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "サーバーエラーが発生しました。",
    };
  }
}
