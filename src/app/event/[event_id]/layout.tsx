import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import prisma from "@/lib/prisma";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  params: Promise<{ event_id: string }>;
};

export default async function EventLayout({ children, params }: Props) {
  const { event_id } = await params;

  const event = await prisma.event.findUnique({
    where: { id: event_id },
    select: {
      id: true,
      name: true,
    },
  });

  if (!event) {
    return <p>イベントが存在しません。</p>;
  }

  return (
    <div>
      <header className="bg-main">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href={`/event/${event.id}`}
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  {event.name}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      {children}
    </div>
  );
}
