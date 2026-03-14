import { Button } from "@/components/ui/button";
import { getDbAsync } from "@/lib/db";
import { stores } from "@/lib/db/schema";

import Link from "next/link";

export default async function StoreAdminPage() {
  const db = await getDbAsync();
  const fetchedStores = await db
    .select({
      id: stores.id,
      name: stores.name,
      slug: stores.slug,
    })
    .from(stores);
  return (
    <div className="space-y-4">
      {fetchedStores.length > 0 ? (
        fetchedStores.map((store) => (
          <div key={store.id}>
            <Button>
              <Link href={`/admin/store/${store.slug}`} prefetch={false}>
                {store.name}
              </Link>
            </Button>
          </div>
        ))
      ) : (
        <p>店舗はまだありません。</p>
      )}
    </div>
  );
}
