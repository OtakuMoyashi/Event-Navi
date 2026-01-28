type Props = {
  params: Promise<{ event_id: string }>;
};

export default async function EventTopPage({ params }: Props) {
  const { event_id } = await params;

  return (
    <>
      <p>イベントトップ（ID:{event_id}）</p>
    </>
  );
}
