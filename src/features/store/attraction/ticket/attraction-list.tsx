"use client";
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
import { useState, useTransition, useEffect } from "react";

import { TicketStatus } from "@/generated/prisma/enums";
import { Ticket } from "@/generated/prisma/client";
import { fetchTicketsByStatus } from "./action";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select";

interface AttractionTicketListProps {
  storeId: string;
}

const STATUS_OPTIONS: { value: TicketStatus | null; label: string }[] = [
  { value: null, label: "すべて" },
  { value: "ISSUED", label: "発行済み" },
  { value: "CALLED", label: "呼び出し済み" },
  { value: "COMPLETED", label: "完了" },
  { value: "CANCELED", label: "キャンセル" },
];

export default function AttractionTicketList({
  storeId,
}: AttractionTicketListProps) {
  const [status, setStatus] = useState<TicketStatus | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await fetchTicketsByStatus(storeId, null);
      if (res?.success && Array.isArray(res.tickets)) {
        setTickets(res.tickets);
      } else {
        setTickets([]);
      }
    });
  }, [storeId]);

  const handleStatusChange = (value: string) => {
    const newStatus = value === "null" ? null : (value as TicketStatus);
    setStatus(newStatus);
    startTransition(async () => {
      const res = await fetchTicketsByStatus(storeId, newStatus);
      if (res?.success && Array.isArray(res.tickets)) {
        setTickets(res.tickets);
      } else {
        setTickets([]);
      }
    });
  };

  //TODO 整理券のsort順を考える
  return (
    <div className="space-y-4">
      <Select
        value={status ?? "null"}
        onValueChange={handleStatusChange}
        disabled={isPending}
      >
        <SelectContent>
          <SelectGroup>
            {STATUS_OPTIONS.map((opt) => (
              <SelectItem key={opt.value ?? "null"} value={opt.value ?? "null"}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <h2 className="text-xl font-bold">整理券一覧</h2>
      {tickets.length > 0 ? (
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
            {tickets.map((ticket) => {
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
                    {new Date(ticket.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <NotFoundPrompt contentName="発行された整理券" />
      )}
    </div>
  );
}
