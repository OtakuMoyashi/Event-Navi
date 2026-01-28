import { Store } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { CreateItemForm } from "./create-form";

export default async function CreateTicket() {
  const stores: Store[] = await prisma.store.findMany({
    where: { storeType: "FOOD" },
  });

  if (stores.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <CreateItemForm stores={stores} />;
}
