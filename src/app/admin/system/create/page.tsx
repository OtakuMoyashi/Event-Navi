import Link from "next/link";

export default function SystemAdminCreatePage() {
  return (
    <div>
      <p>テストデータ作成</p>
      <p>
        <Link href="/admin/system/create/event">イベント作成</Link>
      </p>
      <p>
        <Link href="/admin/system/create/store">店舗作成</Link>
      </p>
    </div>
  );
}
