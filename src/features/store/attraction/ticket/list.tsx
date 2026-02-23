import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import QRCode from "@/components/ui/qrcode";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const TICKET_STATUS_MAP = {
  ISSUED: { label: "発券済み" },
  CALLED: { label: "呼出中" },
  COMPLETED: { label: "完了" },
  CANCELED: { label: "キャンセル" },
} as const;

interface UserTicketListProps {
  user: User;
}

export default async function UserTicketList({ user }: UserTicketListProps) {
  const tickets = await prisma.ticket.findMany({
    where: {
      userId: user.id,
      status: "ISSUED",
    },
    include: {
      attraction: {
        include: {
          store: {
            include: {
              event: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">取得した整理券の一覧</h2>

      {tickets.length > 0 ? (
        <div className="px-12 w-full">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tickets.map((ticket) => {
                const statusLabel =
                  TICKET_STATUS_MAP[
                    ticket.status as keyof typeof TICKET_STATUS_MAP
                  ]?.label ?? ticket.status;
                return (
                  <CarouselItem
                    key={ticket.id}
                    className="pl-2 md:pl-4 basis-full"
                  >
                    <Card className="px-4 py-8 space-y-4">
                      <CardHeader className="flex flex-col gap-4 items-start">
                        <p className="text-sm text-text-01">
                          イベント名：{ticket.attraction.store.event?.name}
                        </p>
                        <p className="text-sm text-text-01">
                          企画名：{ticket.attraction.store.name}
                        </p>
                        <p className="text-sm text-text-01">
                          人数:{ticket.numberOfPeople}名
                        </p>
                        <Separator />
                      </CardHeader>
                      <CardContent className="flex flex-col gap-y-4">
                        <div className="flex flex-row gap-x-4 pb-8 justify-start items-baseline">
                          <p className="text-xl">No.{ticket.index}</p>
                          <Badge variant="info">{statusLabel}</Badge>
                        </div>
                        <div className="flex justify-center p">
                          <QRCode text={ticket.id} size={256} />
                        </div>
                      </CardContent>
                      <Separator />
                      <CardFooter className="flex flex-col gap-4 items-start">
                        <div className="text-sm text-text-01">
                          <p>発券日時：{ticket.createdAt.toLocaleString()}</p>
                        </div>
                        <Button variant="danger">削除する</Button>{" "}
                        {/* TODO 削除ロジック実装する */}
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <NotFoundPrompt contentName="取得した整理券" />
      )}
    </div>
  );
}
