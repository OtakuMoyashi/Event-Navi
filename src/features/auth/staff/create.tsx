import prisma from "@/lib/prisma";
import { CreateStaffForm } from "./create-form";

export default async function CreateStaff() {
  const stores = await prisma.store.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <CreateStaffForm stores={stores} />;
}
