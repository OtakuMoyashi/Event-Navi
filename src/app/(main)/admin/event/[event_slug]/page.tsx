import { db } from "@/index";
import { events } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function eventDetailPage({
  params,
}: {
  params: Promise<{ event_slug: string }>;
}) {
  const { event_slug } = await params;

  const event = await db
    .select({
      name: events.name,
    })
    .from(events)
    .where(eq(events.slug, event_slug));

  if (event.length === 0) {
    return notFound();
  }

  return (
    <div>
      <p>イベント名：{event[0].name}</p>
    </div>
  );
}
