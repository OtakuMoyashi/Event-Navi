import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function eventDetailPage({
  params,
}: {
  params: Promise<{ event_slug: string }>;
}) {
  const { event_slug } = await params;

  const event = await prisma.event.findUnique({
    where: { slug: event_slug },
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
