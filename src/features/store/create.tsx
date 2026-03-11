import { db } from "@/index";
import { events } from "@/lib/db/schema";
import CreateStoreForm from "./create-form";

export default async function CreateStore() {
  const eventList = await db.select().from(events);

  return <CreateStoreForm events={eventList} />;
}
