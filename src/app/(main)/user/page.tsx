import UserInfo from "@/features/auth/user/info";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";
import { PushNotificationManager } from "@/features/push/manager";
import UserTicketList from "@/features/store/attraction/ticket/user-list";
import { getCurrentUser } from "@/features/auth/user/action";

export default async function UserPage() {
  const user = await getCurrentUser();
  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }
  return (
    <div className="space-y-4">
      <UserInfo userId={user.id} />
      <PushNotificationManager userId={user.id} />
      <UserTicketList userId={user.id} />
    </div>
  );
}
