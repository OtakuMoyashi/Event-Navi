import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SystemAdminHomePage() {
  return (
    <div>
      <p>SystemAdminトップページ</p>
      <Button>
        <Link href="/admin/system/create">テストデータを作成する</Link>
      </Button>
    </div>
  );
}
