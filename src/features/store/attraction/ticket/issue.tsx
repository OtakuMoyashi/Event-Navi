import { Store } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { IssueTicketForm } from "./issue-form";

export default async function IssueTicket() {
  const stores: Store[] = await prisma.store.findMany({
    where: { storeType: "ATTRACTION" },
  });

  if (stores.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <IssueTicketForm stores={stores} />;
}
