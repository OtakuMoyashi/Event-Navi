import prisma from "@/lib/prisma";
import UpdateStoreConfigForm from "./update-form";

interface updateStoreConfigProps {
  storeId: string;
}

export default async function UpdateStoreConfig({
  storeId,
}: updateStoreConfigProps) {
  const store = await prisma.store.findUnique({
    where: { id: storeId },
  });
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  return <UpdateStoreConfigForm store={store} />;
}
