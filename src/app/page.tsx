import { InstallPrompt } from "@/features/push/install";
import { PushNotificationManager } from "@/features/push/manager";
import UserInfo from "@/features/auth/user/info";
import { Suspense } from "react";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  const events = await prisma.event.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
  return (
    <div>
      <header className="bg-main">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  ホーム
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/admin"
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  管理者画面
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <div className="p-4 md:p-8 space-y-4">
        <Suspense>
          <UserInfo />
          <PushNotificationManager />
          <InstallPrompt />
        </Suspense>
        <Card className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardHeader>
            <CardTitle>イベント一覧</CardTitle>
          </CardHeader>
          <CardContent>
            {events.length > 0 ? (
              events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>イベント名：{event.name}</p>
                    <Button>
                      <Link href={`/event/${event.id}`}>イベントページ</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>イベントはまだありません。</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
