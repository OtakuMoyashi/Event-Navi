import { getCurrentUser } from "@/features/auth/user/action";
import prisma from "@/lib/prisma";

const TICKET_STATUS_MAP = {
  ISSUED: { label: "発券済み" },
  CALLED: { label: "呼出中" },
  COMPLETED: { label: "完了" },
  CANCELLED: { label: "キャンセル" },
} as const;

export default async function UserTicketList() {
  const user = await getCurrentUser();
  const tickets = await prisma.ticket.findMany({
    where: {
      userId: user.id,
    },
    include: {
      attraction: {
        include: {
          store: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
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
        {tickets.map((ticket) => {
          const status = TICKET_STATUS_MAP[ticket.status];
          return (
            <div key={ticket.id}>
              <p>企画名:{ticket.attraction.store.name}</p>
              <p>番号:{ticket.index}</p>
              <p>人数:{ticket.numberOfPeople}</p>
              <p>状態:{status.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
