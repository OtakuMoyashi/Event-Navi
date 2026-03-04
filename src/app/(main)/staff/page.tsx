import { Button } from "@/components/ui/button";
import Signout from "@/features/auth/signout";
import { getCurrentUser } from "@/features/auth/user/action";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function StaffHomePage() {
  const user = await getCurrentUser();
  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }
  const staff = await prisma.staff.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (!staff) {
    return <p>スタッフが存在しません。</p>;
  }
  const store = await prisma.store.findUnique({
    where: { id: staff.storeId },
  });
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div className="space-y-4">
      <p>スタッフトップページ</p>
      <Button>
        <Link href={`/staff/store/${store.slug}`}>店舗画面へ</Link>
      </Button>
      <Signout />
    </div>
  );
}
