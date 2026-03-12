import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDb } from "@/lib/db";
import { events, stores } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { STORE_TYPE_MAP } from "@/lib/type";

export default async function EventTopPage(props: {
  params: Promise<{ event_slug: string }>;
}) {
  const { event_slug } = await props.params;
  const db = await getDb();
  const eventRows = await db
    .select()
    .from(events)
    .where(eq(events.slug, event_slug))
    .limit(1);
  const event = eventRows[0];

  if (!event) {
    return <p>イベントが存在しません</p>;
  }

  const storeList = await db
    .select({
      id: stores.id,
      name: stores.name,
      slug: stores.slug,
      storeType: stores.storeType,
    })
    .from(stores)
    .where(eq(stores.eventId, event.id));

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
      {storeList.length > 0 ? (
        <Carousel className="w-full  sm:max-w-xs">
          <CarouselContent>
            {storeList.map((store, index) => {
              const typeLabel =
                STORE_TYPE_MAP[store.storeType as keyof typeof STORE_TYPE_MAP]
                  ?.label ?? store.storeType;
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card key={store.id}>
                      <CardHeader>
                        <CardTitle>{store.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>店舗の種類：{typeLabel}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <NotFoundPrompt contentName="店舗" />
      )}
      <Button>
        <Link href={`/event/${event.slug}/issue-ticket`}>整理券を発行</Link>
      </Button>
      <Button>
        <Link href={`/event/${event.slug}/attraction/waiting-status`}>
          企画の待ち状況
        </Link>
      </Button>
    </div>
  );
}
