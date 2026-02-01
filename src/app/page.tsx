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
  NavigationMenuLink,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default async function Home() {
  const events = await prisma.event.findMany({
    select: {
      id: true,
      name: true,
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
    </div>
  );
}
