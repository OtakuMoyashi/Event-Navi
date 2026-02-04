import { InstallPrompt } from "@/features/push/install";
import { PushNotificationManager } from "@/features/push/manager";
import UserInfo from "@/features/auth/user/info";
import { Suspense } from "react";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { getOrCreateUser } from "@/features/auth/user/action";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";

export default async function Home() {
  const currentUser = await getOrCreateUser();
  const events = await prisma.event.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
  return (
    <div className="space-y-4">
      <Suspense fallback={<LoadingPrompt contentName="通知設定" />}>
        <PushNotificationManager user={currentUser} />
        <InstallPrompt />
      </Suspense>
      <Suspense fallback={<LoadingPrompt contentName="イベント一覧" />}>
        <div className="space-y-6">
          <h2 className="text-xl font-bold px-1">イベント一覧</h2>

          {events.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      イベント名：{event.name}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/event/${event.id}`}>イベントページ</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <NotFoundPrompt contentName="イベント" />
          )}
        </div>
      </Suspense>
    </div>
  );
}
