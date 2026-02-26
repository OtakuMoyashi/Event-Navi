import prisma from "@/lib/prisma";
import CreateStoreForm from "./create-form";

export default async function CreateStore() {
  const events = await prisma.event.findMany();

  return <CreateStoreForm events={events} />;
}
