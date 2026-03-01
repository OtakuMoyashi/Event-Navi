import { Store, User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { IssueTicketForm } from "./issue-form";

interface IssueTicketProps {
  eventId: string;
  userId: string;
  isPaper: boolean;
}

export default async function IssueTicket({
  eventId,
  userId,
  isPaper,
}: IssueTicketProps) {
  const stores: Store[] = await prisma.store.findMany({
    where: {
      eventId: eventId,
      storeType: "ATTRACTION",
    },
  });

  if (stores.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <IssueTicketForm userId={userId} stores={stores} isPaper={isPaper} />;
}
