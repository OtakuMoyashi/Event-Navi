import { Button } from "@/components/ui/button";
import { getDb } from "@/lib/db";
import { stores } from "@/lib/db/schema";

import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function StoreStaffHomePage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;

  const db = await getDb();
  const storeRows = await db
    .select()
    .from(stores)
    .where(eq(stores.slug, store_slug))
    .limit(1);
  const store = storeRows[0];

  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div>
      {store.storeType === "ATTRACTION" && (
        <>
          <Button>
            <Link href={`/staff/store/${store_slug}/ticket-list`}>
              整理券の一覧
            </Link>
          </Button>
          <Button>
            <Link href={`/staff/store/${store_slug}/call-ticket`}>
              整理券を読み取る
            </Link>
          </Button>
          <Button>
            <Link href={`/staff/store/${store_slug}/issue-ticket`}>
              整理券を発行する（紙）
            </Link>
          </Button>
        </>
      )}
      {store.storeType === "FOOD" && (
        <>
          <Button>
            <Link href={`/staff/store/${store_slug}/register`}>
              会計ページ（仮）
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
