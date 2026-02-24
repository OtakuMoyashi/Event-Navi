/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { getUserSubscription, subscribeUser, unsubscribeUser } from "./action";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import type { User } from "@/generated/prisma/client";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

interface PushNotificationManagerProps {
  user: User;
}

export function PushNotificationManager({
  user,
}: PushNotificationManagerProps) {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const isRegistering = useRef(false);

  async function registerServiceWorker() {
    if (!user) return;
    if (isRegistering.current) return;
    isRegistering.current = true;

    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });

      const client_sub = await registration.pushManager.getSubscription();

      if (client_sub) {
        const db_sub = await getUserSubscription(user);
        if (db_sub.length === 0) {
          await client_sub.unsubscribe();
          setSubscription(null);
          return;
        }
      }

      setSubscription(client_sub);
    } catch (error) {
      console.error("SW registration failed:", error);
    } finally {
      isRegistering.current = false;
    }
  }

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  });

  async function subscribeToPush() {
    if (!user) return;
    setIsLoading(true);
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        ),
      });

      const serializedSub = JSON.parse(JSON.stringify(sub));
      await subscribeUser(serializedSub, user);
      setSubscription(sub);
    } catch (error) {
      console.error("購読エラー:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function unsubscribeFromPush() {
    if (!user) return;
    setIsLoading(true);
    try {
      await subscription?.unsubscribe();
      await unsubscribeUser(user);
      setSubscription(null);
    } catch (error) {
      console.error("解除エラー:", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isSupported) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm text-red-600">
          お使いのブラウザはプッシュ通知をサポートしていません。
        </p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>プッシュ通知の購読設定</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {subscription ? (
          <>
            <p className="text-sm">プッシュ通知を購読しています。</p>
            <Button
              variant="warn"
              onClick={unsubscribeFromPush}
              disabled={isLoading}
            >
              {isLoading ? "処理中..." : "通知の購読を解除する"}
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              プッシュ通知を購読していません。
            </p>
            <Button onClick={subscribeToPush} disabled={isLoading}>
              {isLoading ? "処理中..." : "通知を購読する"}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
