import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function SuperAdminHomePage() {
  return (
    <div>
      <Link href="/super-admin/organization">
        <Button asChild>
          <span>組織を管理</span>
        </Button>
      </Link>
      <Link href="/super-admin/create">
        <Button asChild>
          <span>テストデータを作成</span>
        </Button>
      </Link>
    </div>
  );
}
