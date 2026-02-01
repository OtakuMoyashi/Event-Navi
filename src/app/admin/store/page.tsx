import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function StoreAdminPage() {
  const stores = await prisma.store.findMany({
    select: { id: true, name: true },
  });
  return (
    <div>
      {stores.length > 0 ? (
        stores.map((store) => (
          <Button key={store.id}>
            <Link href={`/admin/store/${store.id}`}>{store.name}</Link>
          </Button>
        ))
      ) : (
        <p>店舗はまだありません。</p>
      )}
    </div>
  );
}
