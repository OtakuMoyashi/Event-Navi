import { Button } from "@/components/ui/button";
import Signout from "@/features/auth/signout";
import { getCurrentUser } from "@/features/auth/user/action";
import { getDb } from "@/lib/db";
import { staffs, stores } from "@/lib/db/schema";

import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function StaffHomePage() {
  const user = await getCurrentUser();
  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }
  const db = await getDb();
  const staffRows = await db
    .select()
    .from(staffs)
    .where(eq(staffs.userId, user.id))
    .limit(1);
  const staff = staffRows[0];
  if (!staff) {
    return <p>スタッフが存在しません。</p>;
  }
  const storeRows = await db
    .select()
    .from(stores)
    .where(eq(stores.id, staff.storeId))
    .limit(1);
  const storeRow = storeRows[0];
  if (!storeRow) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div className="space-y-4">
      <p>スタッフトップページ</p>
      <Button>
        <Link href={`/staff/store/${storeRow.slug}`} prefetch={false}>
          店舗画面へ
        </Link>
      </Button>
      <Signout />
    </div>
  );
}
