import UserInfo from "@/features/auth/user/info";
import { PushNotificationManager } from "@/features/push/manager";
import UserTicketList from "@/features/store/attraction/ticket/user-list";
import { getCurrentUser } from "@/features/auth/user/action";
import CreateAnonymousUser from "@/features/auth/user/create";

export default async function UserPage() {
  const user = await getCurrentUser();
  if (!user) {
    return <CreateAnonymousUser />;
  }
  return (
    <div className="space-y-4">
      <UserInfo userId={user.id} />
      <PushNotificationManager userId={user.id} />
      <UserTicketList userId={user.id} />
    </div>
  );
}
