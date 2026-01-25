import { getCurrentUser } from "@/features/auth/user/action";
import { Ticket } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export default async function UserTicketList() {
  const user = await getCurrentUser();
  const tickets: Ticket[] = await prisma.ticket.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (tickets.length === 0) {
    return (
      <>
        <p>取得した整理券はありません。</p>
      </>
    );
  }

  return (
    <div>
      <p>整理券一覧</p>
      <div>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <p>企画ID:{ticket.attractionId}</p>
            <p>番号:{ticket.index}</p>
            <p>人数:{ticket.numberOfPeople}</p>
            <p>状態:{ticket.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
