import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

export default async function EventTopPage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;

  const event = await prisma.event.findUnique({
    where: { id: event_id },
  });

  if (!event) {
    return <p>イベントが存在しません</p>;
  }

  const stores = await prisma.store.findMany({
    where: { eventId: event_id },
    select: { id: true, name: true, slug: true, storeType: true },
  });

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{event.name}について</CardTitle>
        </CardHeader>
        <CardContent>
          <p>イベント名：{event.name}</p>
        </CardContent>
      </Card>
      <Card className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardHeader>
          <CardTitle>店舗一覧</CardTitle>
        </CardHeader>
        <CardContent>
          {stores.length > 0 ? (
            stores.map((store) => (
              <Card key={store.id}>
                <CardHeader>
                  <CardTitle>{store.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>店舗の種類：{store.storeType}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>店舗はまだありません。</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
