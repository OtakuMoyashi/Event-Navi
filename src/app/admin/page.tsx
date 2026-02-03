import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminHomePage() {
  const stores = await prisma.store.findMany();

  return (
    <div className="space-y-4">
      <p>Adminトップページ</p>
      {stores.length > 0 ? (
        <div>
          {stores.map((store) => (
            <div key={store.id}>
              <Button>
                <Link href={`/admin/store/${store.id}`}>{store.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>イベントが存在しません</p>
      )}
    </div>
  );
}
