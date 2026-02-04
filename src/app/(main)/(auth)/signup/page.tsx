import SignUpAdmin from "@/features/auth/admin/signup";
import SignUpStaff from "@/features/auth/staff/signup";

export default function SingUpPage() {
  return (
    <div className="space-4">
      <SignUpAdmin />
      <SignUpStaff />
    </div>
  );
}
