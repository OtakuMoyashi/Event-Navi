"use server";

import { PushSubscription } from "@/generated/prisma/client";
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
      error: "サーバーエラーが発生しました。",
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
      error: "サーバーエラーが発生しました。",
    };
  }
}

export async function sendPushNotification(
  sub: PushSubscription,
  title: string,
  message: string,
) {
  if (!sub) {
    throw new Error("No subscription available");
  }
  const subscription = {
    endpoint: sub.endpoint,
    keys: {
      p256dh: sub.p256dh,
      auth: sub.auth,
    },
  };

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: title,
        body: message,
        icon: "/images/icon-192*192.png",
      }),
    );
    return { success: true };
  } catch (error) {
    console.error("Push通知の送信に失敗:", error);
    return { success: false, error: "Push通知の送信に失敗しました。" };
  }
}
