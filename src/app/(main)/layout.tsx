"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function ListItem({
  title,
  children,
  href,
  prefetch,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  prefetch?: boolean;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} prefetch={prefetch}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-main/70 w-full flex h-16 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-none ">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-transparent text-xl`}
              >
                Gakusai-Hub
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu viewport={false} className="lg:hidden relative ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>メニュー</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-48">
                  <ListItem
                    href="/admin"
                    title="管理者ページ"
                    prefetch={false}
                  />
                  <ListItem
                    href="/staff"
                    title="スタッフページ"
                    prefetch={false}
                  />
                  <ListItem href="/user" title="ユーザーページ" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu viewport={false} className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/admin"
                prefetch={false}
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                管理者ページ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/staff"
                prefetch={false}
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                スタッフページ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/user"
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                ユーザーページ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="p-4 space-y-4 md:p-8 md:space-y-8">{children}</main>
    </>
  );
}
