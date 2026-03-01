// src/app/store/[store_id]/page.tsx
import { Button } from "@/components/ui/button";
import StoreInfo from "@/features/store/info";
import prisma from "@/lib/prisma";
import Link from "next/link";
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
      <StoreInfo storeId={store_id} />
      <Button>
        <Link href={`/admin/store/${store_id}/config`}>店舗情報の設定</Link>
      </Button>
    </div>
  );
}
