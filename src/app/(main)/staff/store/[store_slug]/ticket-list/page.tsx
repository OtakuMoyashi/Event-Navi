import AttractionTicketList from "@/features/store/attraction/ticket/attraction-list";
import prisma from "@/lib/prisma";

export default async function TicketListPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const store = await prisma.store.findUnique({
    where: {
      slug: store_slug,
    },
  });
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  const attraction = await prisma.attraction.findUnique({
    where: { storeId: store.id },
    select: { id: true },
  });

  const initialTickets = attraction
    ? await prisma.ticket.findMany({
        where: {
          attractionId: attraction.id,
        },
      })
    : [];

  return (
    <div className="space-y-4">
      <AttractionTicketList
        storeId={store.id}
        initialTickets={initialTickets}
      />
    </div>
  );
}
