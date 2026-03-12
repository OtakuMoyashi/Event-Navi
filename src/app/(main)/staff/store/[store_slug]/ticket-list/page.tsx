import AttractionTicketList from "@/features/store/attraction/ticket/attraction-list";
import { getDb } from "@/lib/db";
import { stores, attractions, tickets } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function TicketListPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const db = await getDb();
  const storeRows = await db
    .select()
    .from(stores)
    .where(eq(stores.slug, store_slug))
    .limit(1);
  const store = storeRows[0];
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  const attractionRows = await db
    .select({ id: attractions.id })
    .from(attractions)
    .where(eq(attractions.storeId, store.id))
    .limit(1);
  const attraction = attractionRows[0];

  const initialTickets = attraction
    ? await db
        .select()
        .from(tickets)
        .where(eq(tickets.attractionId, attraction.id))
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
