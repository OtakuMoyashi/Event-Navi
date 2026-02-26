"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import QRCode from "@/components/ui/qrcode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cancelTicket } from "./action";

interface TicketCardProps {
  ticket: {
    id: string;
    index: number;
    numberOfPeople: number;
    createdAt: Date;
    attraction: {
      store: {
        name: string;
        event?: {
          name: string;
        } | null;
      };
    };
  };
  statusLabel: string;
}

export function TicketCard({ ticket, statusLabel }: TicketCardProps) {
  const [loading, setLoading] = useState(false);

  const handleCancel = async () => {
    setLoading(true);
    await cancelTicket(ticket.id);
    setLoading(false);
  };

  return (
    <Card className="px-4 py-8 space-y-4">
      <CardHeader className="flex flex-col gap-4 items-start">
        <p className="text-sm text-text-01">
          イベント名：{ticket.attraction.store.event?.name}
        </p>
        <p className="text-sm text-text-01">
          企画名：{ticket.attraction.store.name}
        </p>
        <p className="text-sm text-text-01">人数:{ticket.numberOfPeople}名</p>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-4 pb-8 justify-start items-baseline">
          <p className="text-xl">No.{ticket.index}</p>
          <Badge variant="info">{statusLabel}</Badge>
        </div>
        <div className="flex justify-center">
          <QRCode text={ticket.id} size={256} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col gap-4 items-start">
        <div className="text-sm text-text-01">
          <p>
            発券日時：
            {ticket.createdAt.toLocaleString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <Button variant="danger" onClick={handleCancel} disabled={loading}>
          {loading ? "削除中..." : "削除する"}
        </Button>
      </CardFooter>
    </Card>
  );
}
