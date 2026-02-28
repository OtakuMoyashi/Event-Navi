import { Attraction, Store, User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import { TICKET_STATUS_MAP } from "@/lib/type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface AttractionTicketListProps {
  storeId: string;
}

export default async function AttractionTicketList({
  storeId,
}: AttractionTicketListProps) {
  const store = await prisma.store.findUnique({
    where: {
      id: storeId,
    },
  });
  if (!store) {
    return <p>店舗が存在しません。</p>;
  }
  const attraction = await prisma.attraction.findUnique({
    where: {
      storeId: store.id,
    },
  });
  if (!attraction) {
    return <p>企画が存在しません。</p>;
  }
  const tickets = await prisma.ticket.findMany({
    where: {
      attractionId: attraction.id,
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>番号</TableHead>
                    <TableHead>人数</TableHead>
                    <TableHead>状態</TableHead>
                    <TableHead>種類</TableHead>
                    <TableHead>発行日時</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedTickets.map((ticket) => {
                    const statusLabel =
                      TICKET_STATUS_MAP[
                        ticket.status as keyof typeof TICKET_STATUS_MAP
                      ]?.label ?? ticket.status;
                    return (
                      <TableRow key={ticket.id}>
                        <TableCell>{ticket.index}</TableCell>
                        <TableCell>{ticket.numberOfPeople}</TableCell>
                        <TableCell>
                          <Badge>{statusLabel}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge>{ticket.isPaper ? "紙" : "デジタル"}</Badge>
                        </TableCell>

                        <TableCell>
                          {ticket.createdAt.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            );
          })()}
        </div>
      ) : (
        <NotFoundPrompt contentName="取得した整理券" />
      )}
    </div>
  );
}
