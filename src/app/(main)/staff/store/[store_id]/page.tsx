import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function StoreStaffHomePage(props: {
  params: Promise<{ store_id: string }>;
}) {
  const { store_id } = await props.params;

  const store = await prisma.store.findUnique({
    where: { id: store_id },
  });

  if (!store) {
    return <p>店舗が存在しません。</p>;
  }

  return (
    <div>
      {store.storeType === "ATTRACTION" && (
        <>
          <Button>
            <Link href={`/staff/store/${store_id}/ticket-list`}>
              整理券の一覧
            </Link>
          </Button>
          <Button>
            <Link href={`/staff/store/${store_id}/call-ticket`}>
              整理券を読み取る
            </Link>
          </Button>
          <Button>
            <Link href={`/staff/store/${store_id}/issue-ticket`}>
              整理券を発行する（紙）
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
