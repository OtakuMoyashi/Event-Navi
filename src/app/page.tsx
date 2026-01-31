import { InstallPrompt } from "@/features/push/install";
import { PushNotificationManager } from "@/features/push/manager";
import UserInfo from "@/features/auth/user/info";
import { Suspense } from "react";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const events = await prisma.event.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return (
    <div className="space-y-4">
      <Suspense>
        <UserInfo />
        <PushNotificationManager />
        <InstallPrompt />
      </Suspense>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id}>
            <p>{event.name}</p>
            <Button asChild>
              <Link href={`/event/${event.id}`}>イベントページ</Link>
            </Button>
          </div>
        ))
      ) : (
        <p>イベントはまだありません。</p>
      )}
    </div>
  );
}
