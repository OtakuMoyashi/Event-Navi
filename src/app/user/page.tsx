import { getOrCreateUser } from "@/features/auth/user/action";
import UserInfo from "@/features/auth/user/info";

export default async function UserPage() {
  const currentUser = await getOrCreateUser();
  return (
    <div className="p-4 space-y-4">
      <UserInfo user={currentUser} />
    </div>
  );
}
