import { getCurrentUser } from "@/features/auth/user/action";
import IssueTicket from "@/features/store/attraction/ticket/issue";

export default async function TicketIssuePage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;
  const user = await getCurrentUser();

  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }
  console.log(user.id);

  return (
    <div>
      <IssueTicket userId={user.id} eventId={event_id} isPaper={false} />
    </div>
  );
}
