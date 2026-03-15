import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function SystemAdminCreatePage() {
  return (
    <div>
      <p>テストデータ作成</p>

      <Link href="/super-admin/create/event">
        <Button>イベント作成</Button>
      </Link>
      <Link href="/super-admin/create/store">
        <Button>店舗作成</Button>
      </Link>
    </div>
  );
}
