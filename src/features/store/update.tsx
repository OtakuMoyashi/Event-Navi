import { db } from "@/index";
import { stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import UpdateStoreConfigForm from "./update-form";

interface updateStoreConfigProps {
  storeId: string;
}

export default async function UpdateStoreConfig({
  storeId,
}: updateStoreConfigProps) {
  const rows = await db
    .select()
    .from(stores)
    .where(eq(stores.id, storeId))
    .limit(1);
  const store = rows[0];
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  return <UpdateStoreConfigForm store={store} />;
}
