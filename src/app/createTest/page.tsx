import CreateAdminForm from "@/features/auth/admin/create";
import CreateStoreForm from "@/features/store/create";
import CreateStaffForm from "@/features/auth/staff/create";
import CreateAttractionForm from "@/features/store/attraction/create";

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
      <h2>企画登録</h2>
      <CreateAttractionForm />
    </>
  );
}
