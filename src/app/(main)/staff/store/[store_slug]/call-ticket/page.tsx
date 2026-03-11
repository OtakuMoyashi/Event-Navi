import TicketQrCodeReader from "@/features/store/attraction/ticket/call";
import FirstCallTicketForm from "@/features/store/attraction/ticket/first-call-form";
import { db } from "@/index";
import { stores, attractions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function CallTicketPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const rows = await db
    .select({ attraction: attractions })
    .from(stores)
    .leftJoin(attractions, eq(attractions.storeId, stores.id))
    .where(eq(stores.slug, store_slug))
    .limit(1);
  const row = rows[0];
  if (!row) {
    return <p>店舗が存在しません。</p>;
  }
  if (!row.attraction) {
    return <p>企画が存在しません。</p>;
  }
  return (
    <div className="space-y-4">
      <FirstCallTicketForm attractionId={row.attraction.id} />
      <TicketQrCodeReader />
    </div>
  );
}
