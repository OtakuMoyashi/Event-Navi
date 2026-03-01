import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

interface StoreInfoProps {
  storeId: string;
}

export default async function StoreInfo({ storeId }: StoreInfoProps) {
  const store = await prisma.store.findUnique({
    where: { id: storeId },
  });
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
