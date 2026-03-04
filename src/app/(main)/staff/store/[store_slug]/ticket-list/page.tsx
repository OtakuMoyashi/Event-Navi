import AttractionTicketList from "@/features/store/attraction/ticket/attraction-list";
import prisma from "@/lib/prisma";

export default async function TicketListPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const store = await prisma.store.findUnique({
    where: {
      slug: store_slug,
    },
  });
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  return (
    <div className="space-y-4">
      <AttractionTicketList storeId={store.id} />
    </div>
  );
}
