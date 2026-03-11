import UpdateAttractionConfig from "@/features/store/attraction/update";
import { CreateItemForm } from "@/features/store/food/item/create-form";
import UpdateStoreConfig from "@/features/store/update";
import { db } from "@/index";
import { attractions, foods, stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function StoreConfigPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;

  const rows = await db
    .select({
      store: stores,
      attraction: attractions,
      food: foods,
    })
    .from(stores)
    .leftJoin(attractions, eq(attractions.storeId, stores.id))
    .leftJoin(foods, eq(foods.storeId, stores.id))
    .where(eq(stores.slug, store_slug))
    .limit(1);

  const row = rows[0];
  const store = row?.store;
  const attraction = row?.attraction;
  const food = row?.food;

  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div>
      <h1>店舗情報を更新する</h1>
      <UpdateStoreConfig storeId={store.id} />
      {store.storeType === "ATTRACTION" && attraction && (
        <UpdateAttractionConfig attractionId={attraction.id} />
      )}
      {store.storeType === "FOOD" && food && (
        <>
          <CreateItemForm storeId={store.id} />
        </>
      )}
    </div>
  );
}
