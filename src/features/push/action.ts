"use server";

import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import webpush from "web-push";
import { getCurrentUser } from "../auth/user/action";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { create } from "domain";

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

export async function subscribeUser(sub: PushSubscriptionJSONInput) {
  const fetchedUser: User = await getCurrentUser();

  try {
    await prisma.pushSubscription.upsert({
      where: { endpoint: sub.endpoint },
      update: {
        p256dh: sub.keys.p256dh,
        auth: sub.keys.auth,
        userId: fetchedUser.id,
      },
      create: {
        endpoint: sub.endpoint,
        p256dh: sub.keys.p256dh,
        auth: sub.keys.auth,
        userId: fetchedUser.id,
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

export async function unsubscribeUser() {
  const fetchedUser: User = await getCurrentUser();

  try {
    await prisma.pushSubscription.deleteMany({
      where: {
        userId: fetchedUser.id,
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
