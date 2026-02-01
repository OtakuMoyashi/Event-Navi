import prisma from "@/lib/prisma";

export default async function EventTopPage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;

  const event = await prisma.event.findUnique({
    where: { id: event_id },
  });

  if (!event) {
    return <p>イベントが存在しません</p>;
  }

  return (
    <div>
      <p>イベントトップ（ID:{event.id}）</p>
    </div>
  );
}
