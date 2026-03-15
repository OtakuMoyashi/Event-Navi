import Link from "next/link";
import { Button } from "@/components/ui/button";

//TODO 組織一覧も追加する
export default async function DashBordHomePage() {
  return (
    <div className="space-y-4">
      <Link href="/admin">
        <Button>管理者ページへ</Button>
      </Link>
      <Link href="/staff">
        <Button>スタッフページへ</Button>
      </Link>
    </div>
  );
}
