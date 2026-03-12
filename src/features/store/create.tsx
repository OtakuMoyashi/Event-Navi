import { getDb } from "@/lib/db";
import { events } from "@/lib/db/schema";
import CreateStoreForm from "./create-form";

export default async function CreateStore() {
  const db = await getDb();
  const eventList = await db.select().from(events);

  return <CreateStoreForm events={eventList} />;
}
