import CreateStockLog from "@/features/store/food/stock-log/create";

export default async function FoodRegister(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;
  return <CreateStockLog storeId={store_id} />;
}
