import { getDbAsync } from "@/lib/db";
import { stores } from "@/lib/db/schema";
import { asc } from "drizzle-orm";
import { SignUpStaffForm } from "./signup-form";

export default async function SignUpStaff() {
  const db = await getDbAsync();
  const storeList = await db
    .select()
    .from(stores)
    .orderBy(asc(stores.createdAt));

  return <SignUpStaffForm stores={storeList} />;
}
