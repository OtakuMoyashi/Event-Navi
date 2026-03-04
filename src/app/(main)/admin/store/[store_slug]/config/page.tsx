import UpdateAttractionConfig from "@/features/store/attraction/update";
import { CreateItemForm } from "@/features/store/food/item/create-form";
import UpdateStoreConfig from "@/features/store/update";
import prisma from "@/lib/prisma";

export default async function StoreConfigPage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;
  const store = await prisma.store.findUnique({
    where: { slug: store_slug },
    include: { attraction: true, food: true },
  });

  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div>
      <h1>店舗情報を更新する</h1>
      <UpdateStoreConfig storeId={store.id} />
      {store.storeType === "ATTRACTION" && store.attraction && (
        <UpdateAttractionConfig attractionId={store.attraction.id} />
      )}
      {store.storeType === "FOOD" && store.food && (
        <>
          <CreateItemForm storeId={store.id} />
        </>
      )}
    </div>
  );
}
