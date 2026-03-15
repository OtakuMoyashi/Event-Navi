"use client";

import {
  NavigationMenu,
  NavigationMenuList,
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
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-main/70 w-full flex h-16 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-none ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" className={`bg-transparent text-xl`}>
                ダッシュボード
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="lg:hidden relative ">
          <NavigationMenuList>
            <NavigationMenuItem value="main-menu">
              <NavigationMenuTrigger>メニュー</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-48">
                  <ListItem href="/admin" title="管理者ページ" />
                  <ListItem href="/staff" title="スタッフページ" />
                  <ListItem href="/super-admin" title="システム管理ページ" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/admin" className={`bg-transparent`}>
                管理者ページ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/staff" className={`bg-transparent`}>
                スタッフページ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/super-admin" className={`bg-transparent`}>
                システム管理ページ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="p-4 space-y-4 md:p-8 md:space-y-8">{children}</main>
    </>
  );
}
