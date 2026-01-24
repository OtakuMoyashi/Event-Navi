import prisma from "@/lib/prisma";
import { CreateStaffClient } from "./client";

export default async function CreateStaffForm() {
  const stores = await prisma.store.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <CreateStaffClient stores={stores} />;
}
