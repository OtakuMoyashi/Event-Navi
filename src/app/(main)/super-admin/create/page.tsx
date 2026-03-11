import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SystemAdminCreatePage() {
  return (
    <div>
      <p>テストデータ作成</p>

      <Link href="/super-admin/create/event" prefetch={false}>
        <Button>イベント作成</Button>
      </Link>
      <Link href="/super-admin/create/store" prefetch={false}>
        <Button>店舗作成</Button>
      </Link>
    </div>
  );
}
