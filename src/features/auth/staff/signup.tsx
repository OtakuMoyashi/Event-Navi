import prisma from "@/lib/prisma";
import { SignUpStaffForm } from "./signup-form";

export default async function SignUpStaff() {
  const stores = await prisma.store.findMany({
    orderBy: { createdAt: "asc" },
  });

  return <SignUpStaffForm stores={stores} />;
}
