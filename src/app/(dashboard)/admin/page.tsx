import { Button } from "@/components/ui/button";
import Signout from "@/features/auth/signout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getDbAsync } from "@/lib/db";
import { admins } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Link from "next/link";

export default async function AdminHomePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/signin/admin");
  }

  const userId = session.user.id;

  const db = await getDbAsync();

  const rows = await db
    .select({ userId: admins.userId })
    .from(admins)
    .where(eq(admins.userId, userId))
    .limit(1);

  if (rows.length === 0) {
    return <p>管理者が存在しません。</p>;
  }

  return (
    <div className="space-y-4">
      <p>管理者トップページ</p>
      <Button>
        <Link href="/admin/event">イベント管理画面へ</Link>
      </Button>
      <Button>
        <Link href="/admin/store">店舗管理画面へ</Link>
      </Button>
      <Signout />
    </div>
  );
}
