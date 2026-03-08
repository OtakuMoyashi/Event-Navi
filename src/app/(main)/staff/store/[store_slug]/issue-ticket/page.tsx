import { getCurrentUser } from "@/features/auth/user/action";
import AttractionTicketList from "@/features/store/attraction/ticket/attraction-list";
import IssueTicket from "@/features/store/attraction/ticket/issue";
import prisma from "@/lib/prisma";

export default async function StaffIssueTicketPage() {
  const user = await getCurrentUser();
  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }
  const staff = await prisma.staff.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      store: true,
    },
  });

  if (!staff || !staff.store || !staff.store.eventId) {
    return <p>イベント情報が取得できません。</p>;
  }

  const attraction = await prisma.attraction.findUnique({
    where: { storeId: staff.storeId },
    select: { id: true },
  });

  const initialTickets = attraction
    ? await prisma.ticket.findMany({
        where: {
          attractionId: attraction.id,
        },
      })
    : [];

  return (
    <div>
      <h1>スタッフ用整理券発行ページ</h1>
      <p>端末を持たない方への整理券を発行します。</p>
      <IssueTicket
        userId={user.id}
        eventId={staff.store.eventId}
        isPaper={true}
      />
      <AttractionTicketList
        storeId={staff.storeId}
        initialTickets={initialTickets}
      />
    </div>
  );
}
