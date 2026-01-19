import CreateAdminForm from "@/features/auth/admin/create";
import CreateStoreForm from "@/features/store/create";
import CreateStaffForm from "@/features/auth/staff/create";

export default function TestPage() {
  return (
    <>
      <h1>テストページ</h1>
      <h2>Admin登録</h2>
      <CreateAdminForm />
      <h2>Staff登録</h2>
      <CreateStaffForm />
      <h2>店舗登録</h2>
      <CreateStoreForm />
    </>
  );
}
