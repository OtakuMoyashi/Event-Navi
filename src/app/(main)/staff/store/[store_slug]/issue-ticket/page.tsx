import { getCurrentUser } from "@/features/auth/user/action";
import AttractionTicketList from "@/features/store/attraction/ticket/attraction-list";
import IssueTicket from "@/features/store/attraction/ticket/issue";
import { db } from "@/index";
import { staffs, stores, attractions, tickets } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function StaffIssueTicketPage() {
  const user = await getCurrentUser();
  if (!user) {
    return <p>ユーザーが存在しません。</p>;
  }
  const staffRows = await db
    .select()
    .from(staffs)
    .where(eq(staffs.userId, user.id))
    .limit(1);
  const staff = staffRows[0];

  if (!staff) {
    return <p>イベント情報が取得できません。</p>;
  }

  const storeRows = await db
    .select()
    .from(stores)
    .where(eq(stores.id, staff.storeId))
    .limit(1);
  const store = storeRows[0];

  if (!store || !store.eventId) {
    return <p>イベント情報が取得できません。</p>;
  }

  const attractionRows = await db
    .select({ id: attractions.id })
    .from(attractions)
    .where(eq(attractions.storeId, staff.storeId))
    .limit(1);
  const attraction = attractionRows[0];

  const initialTickets = attraction
    ? await db
        .select()
        .from(tickets)
        .where(eq(tickets.attractionId, attraction.id))
    : [];

  return (
    <div>
      <h1>スタッフ用整理券発行ページ</h1>
      <p>端末を持たない方への整理券を発行します。</p>
      <IssueTicket userId={user.id} eventId={store.eventId} isPaper={true} />
      <AttractionTicketList
        storeId={staff.storeId}
        initialTickets={initialTickets}
      />
    </div>
  );
}
