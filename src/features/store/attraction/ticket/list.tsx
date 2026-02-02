import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
      status: "ISSUED",
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>取得した整理券</CardTitle>
      </CardHeader>
      <CardContent>
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <Card key={ticket.id} className="space-y-4">
              <p>企画名: {ticket.attraction.store.name}</p>
              <p>番号: {ticket.index}</p>
              <p>人数: {ticket.numberOfPeople}</p>
              <p>状態: {ticket.status}</p>
            </Card>
          ))
        ) : (
          <p>取得した整理券はありません。</p>
        )}
      </CardContent>
    </Card>
  );
}
