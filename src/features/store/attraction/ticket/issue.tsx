import { Store, User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { IssueTicketForm } from "./issue-form";

interface IssueTicketProps {
  eventId: string;
  user: User;
}

export default async function IssueTicket({ eventId, user }: IssueTicketProps) {
  const stores: Store[] = await prisma.store.findMany({
    where: {
      eventId: eventId,
      storeType: "ATTRACTION",
    },
  });

  if (stores.length === 0) {
    return <p>企画が存在しません</p>;
  }

  return <IssueTicketForm user={user} stores={stores} />;
}
