import prisma from "@/lib/prisma";

export default async function EventTopPage(props: {
  params: Promise<{ event_id: string }>;
}) {
  const { event_id } = await props.params;

  const event = await prisma.event.findUnique({
    where: { id: event_id },
  });

  return (
    <>
      <p>イベントトップ（ID:{event_id}）</p>
    </>
  );
}
