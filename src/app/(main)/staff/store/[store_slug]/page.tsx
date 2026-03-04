import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function StoreStaffHomePage(props: {
  params: Promise<{ store_slug: string }>;
}) {
  const { store_slug } = await props.params;

  const store = await prisma.store.findUnique({
    where: { slug: store_slug },
  });

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
