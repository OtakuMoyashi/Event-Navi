import { CreateAttractionForm } from "./create-form";
import { Store } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export default async function CreateAttraction() {
  const stores: Store[] = await prisma.store.findMany({
    where: { storeType: "ATTRACTION" },
  });

  if (stores.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <CreateAttractionForm stores={stores} />;
}
