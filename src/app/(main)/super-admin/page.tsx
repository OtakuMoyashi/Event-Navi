import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuperAdminHomePage() {
  return (
    <div>
      <Button>
        <Link href="/super-admin/organization">組織を管理</Link>
      </Button>
      <Button>
        <Link href="/super-admin/create">テストデータを作成</Link>
      </Button>
    </div>
  );
}
