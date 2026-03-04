import TicketQrCodeReader from "@/features/store/attraction/ticket/call";
import FirstCallTicketForm from "@/features/store/attraction/ticket/first-call-form";
import prisma from "@/lib/prisma";

export default async function CallTicketPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const store = await prisma.store.findUnique({
    where: {
      slug: store_slug,
    },
    select: {
      attraction: true,
    },
  });
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  if (!store.attraction) {
    return <p>企画が存在しません。</p>;
  }
  return (
    <div className="space-y-4">
      <FirstCallTicketForm attractionId={store.attraction?.id} />
      <TicketQrCodeReader />
    </div>
  );
}
