import { getOrCreateUser } from "@/features/auth/user/action";
import CreateTicket from "@/features/store/attraction/ticket/issue";
import { User } from "@/generated/prisma/client";

export default async function TicketIssuePage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;
  const user = await getOrCreateUser();

  return (
    <div>
      <CreateTicket user={user} eventId={event_id} />
    </div>
  );
}
