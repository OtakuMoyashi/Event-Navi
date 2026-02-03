import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import QRCode from "@/components/ui/qrcode";
import prisma from "@/lib/prisma";

const TICKET_STATUS_MAP = {
  ISSUED: { label: "発券済み" },
  CALLED: { label: "呼出中" },
  COMPLETED: { label: "完了" },
  CANCELLED: { label: "キャンセル" },
} as const;

interface UserTicketListProps {
  userId: string;
}

export default async function UserTicketList({ userId }: UserTicketListProps) {
  const tickets = await prisma.ticket.findMany({
    where: {
      userId: userId,
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
              <QRCode text={ticket.id} />
            </Card>
          ))
        ) : (
          <p>取得した整理券はありません。</p>
        )}
      </CardContent>
    </Card>
  );
}
