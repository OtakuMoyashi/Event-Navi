import { CreateFoodForm } from "./create-form";
import { db } from "@/index";
import { stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function CreateAttraction() {
  const storeList = await db
    .select()
    .from(stores)
    .where(eq(stores.storeType, "FOOD"));

  if (storeList.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <CreateFoodForm stores={storeList} />;
}
