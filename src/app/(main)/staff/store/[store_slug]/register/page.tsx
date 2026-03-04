import CreateStockLog from "@/features/store/food/stock-log/create";
import prisma from "@/lib/prisma";

export default async function FoodRegister(props: {
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
  return <CreateStockLog storeId={store.id} />;
}
