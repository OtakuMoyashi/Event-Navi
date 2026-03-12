import { getDb } from "@/lib/db";
import { attractions, events, stores, tickets } from "@/lib/db/schema";
import { and, asc, eq, inArray } from "drizzle-orm";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { TicketCard } from "./ticket";
import { TICKET_STATUS_MAP } from "@/lib/type";

interface UserTicketListProps {
  userId: string;
}

export default async function UserTicketList({ userId }: UserTicketListProps) {
  const db = await getDb();
  const activeTicketRows = await db
    .select({
      id: tickets.id,
      index: tickets.index,
      numberOfPeople: tickets.numberOfPeople,
      status: tickets.status,
      createdAt: tickets.createdAt,
      storeName: stores.name,
      eventName: events.name,
    })
    .from(tickets)
    .innerJoin(attractions, eq(attractions.id, tickets.attractionId))
    .innerJoin(stores, eq(stores.id, attractions.storeId))
    .leftJoin(events, eq(events.id, stores.eventId))
    .where(
      and(
        eq(tickets.userId, userId),
        inArray(tickets.status, ["ISSUED", "CALLED"]),
      ),
    )
    .orderBy(asc(tickets.createdAt));

  const activeTickets = activeTicketRows.map((row) => ({
    id: row.id,
    index: row.index,
    numberOfPeople: row.numberOfPeople,
    createdAt: row.createdAt,
    status: row.status,
    attraction: {
      store: {
        name: row.storeName,
        event: row.eventName ? { name: row.eventName } : null,
      },
    },
  }));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">取得した整理券の一覧</h2>

      {activeTickets.length > 0 ? (
        <div className="px-12 w-full">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {activeTickets.map((ticket) => {
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
