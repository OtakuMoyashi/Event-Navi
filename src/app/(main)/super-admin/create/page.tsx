import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SystemAdminCreatePage() {
  return (
    <div>
      <p>テストデータ作成</p>
      <Button>
        <Link href="/admin/system/create/event">イベント作成</Link>
      </Button>
      <Button>
        <Link href="/super-admin/create/store">店舗作成</Link>
      </Button>
    </div>
  );
}
