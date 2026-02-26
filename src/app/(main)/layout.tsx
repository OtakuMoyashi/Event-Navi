import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-main/70 w-full flex h-16 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-none">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-transparent text-xl`}
              >
                Event-System
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/admin"
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                管理者ページ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/staff"
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
