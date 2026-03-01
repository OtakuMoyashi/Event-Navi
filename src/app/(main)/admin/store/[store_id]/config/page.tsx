import UpdateStoreConfig from "@/features/store/update";

export default async function StoreConfigPage(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;
  return (
    <div>
      <h1>店舗情報を更新する</h1>
      <UpdateStoreConfig storeId={store_id} />
    </div>
  );
}
