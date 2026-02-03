import Link from "next/link";

export default function SystemAdminHomePage() {
  return (
    <div>
      <p>SystemAdminトップページ</p>
      <Link href="/admin/system/create">テストデータを作成する</Link>
    </div>
  );
}
