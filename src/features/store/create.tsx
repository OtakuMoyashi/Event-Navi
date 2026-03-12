import { getDB } from "@/lib/db";
import { events } from "@/lib/db/schema";
import CreateStoreForm from "./create-form";

export default async function CreateStore() {
  const db = await getDB();
  const eventList = await db.select().from(events);

  return <CreateStoreForm events={eventList} />;
}
