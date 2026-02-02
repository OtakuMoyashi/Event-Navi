import CreateTicket from "@/features/store/attraction/ticket/issue";

export default async function TicketIssuePage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;

  return (
    <div>
      <CreateTicket eventId={event_id} />
    </div>
  );
}
