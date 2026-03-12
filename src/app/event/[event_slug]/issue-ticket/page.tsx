import { getCurrentUser } from "@/features/auth/user/action";
import CreateAnonymousUser from "@/features/auth/user/create";
import IssueTicket from "@/features/store/attraction/ticket/issue";
import { getDb } from "@/lib/db";
import { events } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function TicketIssuePage(props: {
  params: Promise<{ event_slug: string }>;
}) {
  const { event_slug } = await props.params;
  const db = await getDb();
  const eventRows = await db
    .select()
    .from(events)
    .where(eq(events.slug, event_slug))
    .limit(1);
  const event = eventRows[0];
  if (!event) {
    return <p>イベントが存在しません。</p>;
  }
  const user = await getCurrentUser();

  if (!user) {
    return <CreateAnonymousUser />;
  }

  return (
    <div>
      <IssueTicket userId={user.id} eventId={event.id} isPaper={false} />
    </div>
  );
}
