import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
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
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink>
            <Link href={`/event/${event.id}`}>{event.name}</Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      {children}
    </>
  );
}
