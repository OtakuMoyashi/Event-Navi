import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AdminHomePage() {
  return (
    <div className="space-y-4">
      <p>管理者トップページ</p>
      <Button>
        <Link href="/admin/system">システム管理画面へ</Link>
      </Button>
      <Button>
        <Link href="/admin/event">イベント管理画面へ</Link>
      </Button>
      <Button>
        <Link href="/admin/store">店舗管理画面へ</Link>
      </Button>
      <Button>
        <Link href="/api/signout">サインアウト</Link>
      </Button>
    </div>
  );
}
