import { getCurrentUser } from "@/features/auth/user/action";
import IssueTicket from "@/features/store/attraction/ticket/issue";
import prisma from "@/lib/prisma";

export default async function TicketIssuePage(props: {
  params: Promise<{ event_slug: string }>;
}) {
  const { event_slug } = await props.params;
  const event = await prisma.event.findUnique({
    where: {
      slug: event_slug,
    },
  });
  if (!event) {
    return <p>イベントが存在しません。</p>;
  }
  const user = await getCurrentUser();

  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }

  return (
    <div>
      <IssueTicket userId={user.id} eventId={event.id} isPaper={false} />
    </div>
  );
}
