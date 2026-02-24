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
import { TicketCard } from "./ticket";

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
                    <TicketCard ticket={ticket} statusLabel={statusLabel} />
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
