import StoreInfo from "@/features/store/info";
import prisma from "@/lib/prisma";
import AttractionInfo from "@/features/store/attraction/info";

export default async function StorePage(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;
  const store = await prisma.store.findUnique({
    where: { id: store_id },
    include: { attraction: true },
  });

  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  return (
    <div>
      <StoreInfo storeId={store_id} />
      {store.storeType === "ATTRACTION" && store.attraction && (
        <AttractionInfo attractionId={store.attraction.id} />
      )}
    </div>
  );
}
