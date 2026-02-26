import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
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
      {stores.length > 0 ? (
        <Carousel className="w-full  sm:max-w-xs">
          <CarouselContent>
            {stores.map((store, index) => {
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
        <Link href={`/event/${event.id}/issue-ticket`}>整理券を発行</Link>
      </Button>
      <Button>
        <Link href={`/event/${event.id}/attraction/waiting-status`}>
          企画の待ち状況
        </Link>
      </Button>
    </div>
  );
}
