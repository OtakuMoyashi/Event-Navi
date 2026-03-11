import { Button } from "@/components/ui/button";
import { db } from "@/index";
import { events } from "@/lib/db/schema";
import Link from "next/link";

export default async function EventAdminHomePage() {
  const fetchedEvents = await db
    .select({ id: events.id, name: events.name, slug: events.slug })
    .from(events);
  return (
    <div className="space-y-4">
      {fetchedEvents.length > 0 ? (
        fetchedEvents.map((event) => (
          <div key={event.id}>
            <Button>
              <Link href={`/admin/event/${event.slug}`} prefetch={false}>
                {event.name}
              </Link>
            </Button>
          </div>
        ))
      ) : (
        <p>店舗はまだありません。</p>
      )}
    </div>
  );
}
