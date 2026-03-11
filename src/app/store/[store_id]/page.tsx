import StoreInfo from "@/features/store/info";
import AttractionInfo from "@/features/store/attraction/info";
import { db } from "@/index";
import { stores, attractions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function StorePage(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;
  const rows = await db
    .select({ store: stores, attraction: attractions })
    .from(stores)
    .leftJoin(attractions, eq(attractions.storeId, stores.id))
    .where(eq(stores.id, store_id))
    .limit(1);
  const row = rows[0];

  if (!row) {
    return <p>店舗が存在しません。</p>;
  }
  const { store, attraction } = row;
  return (
    <div>
      <StoreInfo storeId={store_id} />
      {store.storeType === "ATTRACTION" && attraction && (
        <AttractionInfo attractionId={attraction.id} />
      )}
    </div>
  );
}
