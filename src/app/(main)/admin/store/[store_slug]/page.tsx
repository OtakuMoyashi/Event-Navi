import { Button } from "@/components/ui/button";
import AttractionInfo from "@/features/store/attraction/info";
import FoodItemList from "@/features/store/food/item/food-list";
import StoreInfo from "@/features/store/info";
import { getDb } from "@/lib/db";
import { attractions, foods, stores } from "@/lib/db/schema";

import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await params;
  const db = await getDb();
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
    <div className="space-y-4">
      <StoreInfo storeId={store.id} />
      {store.storeType === "ATTRACTION" && attraction && (
        <AttractionInfo attractionId={attraction.id} />
      )}
      {store.storeType === "FOOD" && food && (
        <FoodItemList storeId={store.id} />
      )}
      <Button>
        <Link href={`/admin/store/${store_slug}/config`} prefetch={false}>
          店舗情報の設定
        </Link>
      </Button>
    </div>
  );
}
