import CreateAdmin from "@/features/auth/admin/create";
import CreateStaff from "@/features/auth/staff/create";
import CreateStore from "@/features/store/create";
import CreateAttraction from "@/features/store/attraction/create";

export default function TestPage() {
  return (
    <>
      <h1>テストページ</h1>
      <h2>Admin登録</h2>
      <CreateAdmin />
      <h2>Staff登録</h2>
      <CreateStaff />
      <h2>店舗登録</h2>
      <CreateStore />
      <h2>企画登録</h2>
      <CreateAttraction />
    </>
  );
}
