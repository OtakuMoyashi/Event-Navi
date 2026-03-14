import { getDbAsync } from "@/lib/db";
import { admins } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default async function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/signin/admin");
  }

  const userId = session.user.id;

  const db = await getDbAsync();

  const rows = await db
    .select({ userId: admins.userId })
    .from(admins)
    .where(and(eq(admins.userId, userId), eq(admins.role, "SUPER_ADMIN")))
    .limit(1);

  if (rows.length === 0) {
    redirect("/signin/admin");
  }

  return (
    <div>
      <header className="bg-main/70 w-full flex h-16 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-none">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/super-admin" className={`bg-transparent text-xl`}>
                Gakusai-Hub総合管理者ページ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}
