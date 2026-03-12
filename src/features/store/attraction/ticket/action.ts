/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";
import {
  attractions,
  pushSubscriptions,
  tickets,
  type TicketStatus,
} from "@/lib/db/schema";
import { and, asc, eq, gt, inArray, lte, sql } from "drizzle-orm";
import { sendPushNotification } from "@/features/push/action";
import { getDB } from "@/lib/db";

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
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { numberOfPeople } = validationResult.data;
  const storeId = formData.get("storeId") as string;

  try {
    const db = await getDB();
    const attractionRows = await db
      .select({ id: attractions.id })
      .from(attractions)
      .where(eq(attractions.storeId, storeId))
      .limit(1);
    const attraction = attractionRows[0];

    if (!attraction) {
      return {
        success: false,
        message: "企画が存在しません。",
      };
    }

    await db.transaction(async (tx) => {
      const countRows = await tx
        .select({ count: sql<number>`count(*)` })
        .from(tickets)
        .where(eq(tickets.attractionId, attraction.id));

      const ticketCount: number = Number(countRows[0]?.count ?? 0);

      const nextIndex: number = ticketCount + 1;

      await tx.insert(tickets).values({
        index: nextIndex,
        numberOfPeople: numberOfPeople,
        status: "ISSUED",
        attractionId: attraction.id,
        userId: userId,
        isPaper: isPaper,
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
      message: null,
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
      message: null,
      error: "入力形式が正しくありません",
    };
  }

  const { count } = validationResult.data;
  try {
    const db = await getDB();
    const result = await db.transaction(async (tx) => {
      const issuedCountRows = await tx
        .select({ count: sql<number>`count(*)` })
        .from(tickets)
        .where(
          and(
            eq(tickets.attractionId, attractionId),
            eq(tickets.status, "ISSUED"),
          ),
        );

      const issuedCount = Number(issuedCountRows[0]?.count ?? 0);
      const limitedCount = Math.min(count, issuedCount);
      if (limitedCount === 0) {
        return { calledCount: 0 };
      }
      const issuedTickets = await tx
        .select({
          id: tickets.id,
          userId: tickets.userId,
          index: tickets.index,
        })
        .from(tickets)
        .where(
          and(
            eq(tickets.attractionId, attractionId),
            eq(tickets.status, "ISSUED"),
          ),
        )
        .orderBy(asc(tickets.index))
        .limit(limitedCount);

      const ids = issuedTickets.map((t) => t.id);
      if (ids.length === 0) {
        return { calledCount: 0 };
      }

      await tx
        .update(tickets)
        .set({ status: "CALLED" })
        .where(inArray(tickets.id, ids));

      for (const ticket of issuedTickets) {
        const subRows = await tx
          .select()
          .from(pushSubscriptions)
          .where(eq(pushSubscriptions.userId, ticket.userId))
          .limit(1);
        const sub = subRows[0];
        if (sub) {
          await sendPushNotification(
            sub,
            "整理券が呼び出されました",
            `あなたの整理券（番号: ${ticket.index}）が呼び出されました。順番までお待ちください。`,
          );
        }
      }

      return { calledCount: ids.length };
    });

    if (result.calledCount === 0) {
      return {
        success: false,
        message: "呼び出す整理券がありません。",
      };
    }

    return {
      success: true,
      message: `${result.calledCount}件の整理券を呼び出しました。`,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}

export async function callTicket(ticketId: string) {
  try {
    const db = await getDB();
    const result = await db.transaction(async (tx) => {
      const fetchedRows = await tx
        .select()
        .from(tickets)
        .where(eq(tickets.id, ticketId))
        .limit(1);
      const fetchedTicket = fetchedRows[0];

      if (!fetchedTicket) {
        return { ok: false as const, message: "整理券が存在しません" };
      }

      if (fetchedTicket.status != "CALLED") {
        return {
          ok: false as const,
          message: "整理券は呼び出されていません",
        };
      }
      await tx
        .update(tickets)
        .set({ status: "COMPLETED" })
        .where(eq(tickets.id, ticketId));

      await tx
        .update(tickets)
        .set({ status: "CALLED" })
        .where(
          and(
            eq(tickets.attractionId, fetchedTicket.attractionId),
            eq(tickets.status, "ISSUED"),
            gt(tickets.index, fetchedTicket.index),
            lte(tickets.index, fetchedTicket.index + 3),
          ),
        );

      return { ok: true as const };
    });

    if (!result.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}

export async function cancelTicket(ticketId: string) {
  try {
    const db = await getDB();
    await db
      .update(tickets)
      .set({ status: "CANCELED" })
      .where(eq(tickets.id, ticketId));
    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}

export async function fetchTicketsByStatus(
  storeId: string,
  status: TicketStatus | null,
) {
  const db = await getDB();
  try {
    const attractionRows = await db
      .select({ id: attractions.id })
      .from(attractions)
      .where(eq(attractions.storeId, storeId))
      .limit(1);
    const attraction = attractionRows[0];
    if (!attraction) {
      return;
    }

    const ticketList = status
      ? await db
          .select()
          .from(tickets)
          .where(
            and(
              eq(tickets.attractionId, attraction.id),
              eq(tickets.status, status),
            ),
          )
      : await db
          .select()
          .from(tickets)
          .where(eq(tickets.attractionId, attraction.id));

    return {
      success: true,
      tickets: ticketList,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}
