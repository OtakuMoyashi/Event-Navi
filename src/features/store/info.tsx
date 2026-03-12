import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDb } from "@/lib/db";
import { stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface StoreInfoProps {
  storeId: string;
}

export default async function StoreInfo({ storeId }: StoreInfoProps) {
  const db = await getDb();
  const rows = await db
    .select()
    .from(stores)
    .where(eq(stores.id, storeId))
    .limit(1);
  const store = rows[0];
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{store.name}の情報</CardTitle>
      </CardHeader>
      <CardContent>
        <p>識別名:{store.slug}</p>
        <p>開始日時:{store.startedAt?.toLocaleString()}</p>
        <p>終了日時:{store.finishedAt?.toLocaleString()}</p>
        <p>詳細:{store.description}</p>
        <div>
          {store.isActive ? <Badge>営業中</Badge> : <Badge>停止中</Badge>}
        </div>
      </CardContent>
    </Card>
  );
}
