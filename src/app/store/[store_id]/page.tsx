import StoreInfo from "@/features/store/info";

export default async function StorePage(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;
  return <StoreInfo storeId={store_id} />;
}
