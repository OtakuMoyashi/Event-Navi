import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default async function AdminLayout({ children }: Props) {
  return (
    <div>
      <header className="bg-main">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  Home
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
              <NavigationMenuItem>
                <Link
                  href="/admin/create-event"
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  イベントを作成
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="container mx-auto px-8 py-4">{children}</main>
    </div>
  );
}
