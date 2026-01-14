"use server";

import {
  PushSubscription as PrismaPushSub,
  User,
} from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import webpush from "web-push";
import { getCurrentUser } from "../user/action";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { create } from "domain";

webpush.setVapidDetails(
  "mailto:your-name@example.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export type PushSubscriptionJSONInput = {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  expirationTime?: number | null;
};

export async function subscribeUser(
  sub: PushSubscriptionJSONInput
): Promise<{ success: boolean }> {
  const fetchedUser: User | null = await getCurrentUser();

  if (!fetchedUser) return { success: false };

  const createdSub = await prisma.pushSubscription.upsert({
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

  if (!createdSub) return { success: false };

  return { success: true };
}

export async function unsubscribeUser(): Promise<{ success: boolean }> {
  const fetchedUser: User | null = await getCurrentUser();

  if (!fetchedUser) return { success: false };

  await prisma.pushSubscription.deleteMany({
    where: {
      userId: fetchedUser.id,
    },
  });

  return { success: true };
}

/*　
export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error('No subscription available')
  }
 
  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png',
      })
    )
    return { success: true }
  } catch (error) {
    console.error('Error sending push notification:', error)
    return { success: false, error: 'Failed to send notification' }
  }
}*/
