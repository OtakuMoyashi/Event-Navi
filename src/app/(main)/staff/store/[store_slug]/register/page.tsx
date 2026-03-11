import CreateStockLog from "@/features/store/food/stock-log/create";
import { db } from "@/index";
import { stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function FoodRegister(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const storeRows = await db
    .select()
    .from(stores)
    .where(eq(stores.slug, store_slug))
    .limit(1);
  const store = storeRows[0];
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  return <CreateStockLog storeId={store.id} />;
}
