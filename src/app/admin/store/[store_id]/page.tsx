// src/app/store/[store_id]/page.tsx
import prisma from "@/lib/prisma";
import UpdateStoreForm from "@/features/store/update";
import { notFound } from "next/navigation";

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await params;

  // 1. ストアの存在確認
  const store = await prisma.store.findUnique({
    where: { id: store_id },
  });

  if (!store) {
    notFound();
  }

  // 2. 選択肢となるイベント一覧を取得
  const events = await prisma.event.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{store.name} の設定</h1>

      {events.length > 0 ? (
        <UpdateStoreForm events={events} storeId={store_id} />
      ) : (
        <p className="text-muted-foreground">
          選択可能なイベントがありません。
        </p>
      )}
    </main>
  );
}
