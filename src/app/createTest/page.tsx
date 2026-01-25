import CreateAdmin from "@/features/auth/admin/create";
import CreateStaff from "@/features/auth/staff/create";
import CreateStore from "@/features/store/create";
import CreateAttraction from "@/features/store/attraction/create";

export default function TestPage() {
  return (
    <div className="space-y-4 divide-y">
      <h1>テストページ</h1>
      <CreateAdmin />
      <CreateStaff />
      <CreateStore />
      <CreateAttraction />
    </div>
  );
}
