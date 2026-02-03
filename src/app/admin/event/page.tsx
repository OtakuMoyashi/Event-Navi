import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function EventAdminHomePage() {
  const events = await prisma.event.findMany();
  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id}>
            <Button>
              <Link href={`/admin/event/${event.id}`}>{event.name}</Link>
            </Button>
          </div>
        ))
      ) : (
        <p>店舗はまだありません。</p>
      )}
    </div>
  );
}
