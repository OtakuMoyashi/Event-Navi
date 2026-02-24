import { Attraction, Store, User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { TicketCard } from "./ticket";

const TICKET_STATUS_MAP = {
  ISSUED: { label: "発券済み" },
  CALLED: { label: "呼出中" },
  COMPLETED: { label: "完了" },
  CANCELED: { label: "キャンセル" },
} as const;

interface AttractionTicketListProps {
  store: Store;
  attraction: Attraction;
}

export default async function UserTicketList({
  store,
  attraction,
}: AttractionTicketListProps) {
  const tickets = await prisma.ticket.findMany({
    where: {
      attractionId: attraction.id,
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
      <h2 className="text-xl font-bold">{store.name}の整理券一覧</h2>

      {tickets.length > 0 ? (
        <div className="px-12 w-full">
          {(() => {
            const STATUS_ORDER = [
              "ISSUED",
              "CALLED",
              "COMPLETED",
              "CANCELED",
            ] as const;
            const sortedTickets = tickets.slice().sort((a, b) => {
              const statusDiff =
                STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);
              if (statusDiff !== 0) return statusDiff;
              return (
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
              );
            });
            return (
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full max-w-lg mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {sortedTickets.map((ticket) => {
                    const statusLabel =
                      TICKET_STATUS_MAP[
                        ticket.status as keyof typeof TICKET_STATUS_MAP
                      ]?.label ?? ticket.status;
                    return (
                      <CarouselItem
                        key={ticket.id}
                        className="pl-2 md:pl-4 basis-full"
                      >
                        <TicketCard ticket={ticket} statusLabel={statusLabel} />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            );
          })()}
        </div>
      ) : (
        <NotFoundPrompt contentName="取得した整理券" />
      )}
    </div>
  );
}
