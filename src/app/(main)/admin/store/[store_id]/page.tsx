import { Button } from "@/components/ui/button";
import AttractionInfo from "@/features/store/attraction/info";
import FoodItemList from "@/features/store/food/item/food-list";
import StoreInfo from "@/features/store/info";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await params;

  const store = await prisma.store.findUnique({
    where: { id: store_id },
    include: { attraction: true, food: true },
  });

  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div className="space-y-4">
      <StoreInfo storeId={store_id} />
      {store.storeType === "ATTRACTION" && store.attraction && (
        <AttractionInfo attractionId={store.attraction.id} />
      )}
      {store.storeType === "FOOD" && store.food && (
        <FoodItemList storeId={store.id} />
      )}
      <Button>
        <Link href={`/admin/store/${store_id}/config`}>店舗情報の設定</Link>
      </Button>
    </div>
  );
}
