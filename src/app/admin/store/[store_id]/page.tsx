// src/app/store/[store_id]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await params;

  const store = await prisma.store.findUnique({
    where: { id: store_id },
  });

  if (!store) {
    notFound();
  }

  return (
    <div>
      <p>店舗名：{store.name}</p>
    </div>
  );
}
