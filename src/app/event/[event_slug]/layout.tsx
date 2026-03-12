import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getDb } from "@/lib/db";
import { events } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  params: Promise<{ event_slug: string }>;
};

export default async function EventLayout({ children, params }: Props) {
  const { event_slug } = await params;
  const db = await getDb();
  const eventRows = await db
    .select({ id: events.id, name: events.name, slug: events.slug })
    .from(events)
    .where(eq(events.slug, event_slug))
    .limit(1);
  const event = eventRows[0];

  if (!event) {
    return <p>イベントが存在しません。</p>;
  }

  return (
    <div>
      <header className="bg-main/70 w-full flex h-16 justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 backdrop-blur-none">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href={`/event/${event.slug}`}
                className={`${navigationMenuTriggerStyle()} bg-transparent text-xl`}
              >
                {event.name}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/user"
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                ユーザー情報
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}
