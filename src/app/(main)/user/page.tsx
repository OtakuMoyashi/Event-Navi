import { getOrCreateUser } from "@/features/auth/user/action";
import UserInfo from "@/features/auth/user/info";
import UserTicketList from "@/features/store/attraction/ticket/list";

export default async function UserPage() {
  const currentUser = await getOrCreateUser();
  return (
    <div className="space-y-4">
      <UserInfo user={currentUser} />
      <UserTicketList user={currentUser} />
    </div>
  );
}
