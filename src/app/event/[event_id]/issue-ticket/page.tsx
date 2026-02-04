import { LoadingPrompt } from "@/components/prompt/loading-prompt";
import { getCurrentUser } from "@/features/auth/user/action";
import CreateTicket from "@/features/store/attraction/ticket/issue";

export default async function TicketIssuePage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <LoadingPrompt contentName="ユーザー情報" />;
  }

  return (
    <div>
      <CreateTicket user={currentUser} eventId={event_id} />
    </div>
  );
}
