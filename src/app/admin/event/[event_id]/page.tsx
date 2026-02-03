import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function eventDetailPage({
  params,
}: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await params;

  const event = await prisma.event.findUnique({
    where: { id: event_id },
  });

  if (!event) {
    notFound();
  }

  return (
    <div>
      <p>イベント名：{event.name}</p>
    </div>
  );
}
