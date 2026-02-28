"use server";

import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import webpush from "web-push";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

webpush.setVapidDetails(
  "mailto:your-name@example.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

export type PushSubscriptionJSONInput = {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  expirationTime?: number | null;
};

export async function getUserSubscription(userId: string) {
  return await prisma.pushSubscription.findMany({
    where: { id: userId },
  });
}

export async function subscribeUser(
  sub: PushSubscriptionJSONInput,
  userId: string,
) {
  try {
    await prisma.pushSubscription.upsert({
      where: { endpoint: sub.endpoint },
      update: {
        p256dh: sub.keys.p256dh,
        auth: sub.keys.auth,
        userId: userId,
      },
      create: {
        endpoint: sub.endpoint,
        p256dh: sub.keys.p256dh,
        auth: sub.keys.auth,
        userId: userId,
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
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function unsubscribeUser(userId: string) {
  try {
    await prisma.pushSubscription.deleteMany({
      where: {
        userId: userId,
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
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
