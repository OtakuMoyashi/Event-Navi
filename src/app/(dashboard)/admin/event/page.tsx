import { Button } from "@/components/ui/button";
import { getDbAsync } from "@/lib/db";
import { events } from "@/lib/db/schema";

import Link from "next/link";

export default async function EventAdminHomePage() {
  const db = await getDbAsync();
  const fetchedEvents = await db
    .select({ id: events.id, name: events.name, slug: events.slug })
    .from(events);
  return (
    <div className="space-y-4">
      {fetchedEvents.length > 0 ? (
        fetchedEvents.map((event) => (
          <div key={event.id}>
            <Button>
              <Link href={`/admin/event/${event.slug}`}>{event.name}</Link>
            </Button>
          </div>
        ))
      ) : (
        <p>イベントはまだありません。</p>
      )}
    </div>
  );
}
