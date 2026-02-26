import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function StoreAdminPage() {
  const stores = await prisma.store.findMany({
    select: { id: true, name: true },
  });
  return (
    <div className="space-y-4">
      {stores.length > 0 ? (
        stores.map((store) => (
          <div key={store.id}>
            <Button>
              <Link href={`/admin/store/${store.id}`}>{store.name}</Link>
            </Button>
          </div>
        ))
      ) : (
        <p>店舗はまだありません。</p>
      )}
    </div>
  );
}
