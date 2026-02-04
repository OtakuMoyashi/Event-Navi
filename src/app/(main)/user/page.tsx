import { getCurrentUser } from "@/features/auth/user/action";
import UserInfo from "@/features/auth/user/info";
import UserTicketList from "@/features/store/attraction/ticket/list";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";

export default async function UserPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <LoadingPrompt contentName="ユーザー情報" />;
  }

  return (
    <div className="space-y-4">
      <UserInfo user={currentUser} />
      <UserTicketList user={currentUser} />
    </div>
  );
}
