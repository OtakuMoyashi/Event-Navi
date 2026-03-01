import AttractionTicketList from "@/features/store/attraction/ticket/attraction-list";

export default async function TicketListPage(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;
  return (
    <div className="space-y-4">
      <AttractionTicketList storeId={store_id} />
    </div>
  );
}
