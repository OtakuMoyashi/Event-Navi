import { CreateAttractionForm } from "./create-form";
import { getDb } from "@/lib/db";
import { stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function CreateAttraction() {
  const db = await getDb();
  const storeList = await db
    .select()
    .from(stores)
    .where(eq(stores.storeType, "ATTRACTION"));

  if (storeList.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <CreateAttractionForm stores={storeList} />;
}
