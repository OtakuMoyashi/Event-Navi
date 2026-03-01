import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

interface AttractionInfoProps {
  attractionId: string;
}

export default async function AttractionInfo({
  attractionId,
}: AttractionInfoProps) {
  const attraction = await prisma.attraction.findUnique({
    where: { id: attractionId },
  });
  if (!attraction) {
    return <p>店舗が存在しません。</p>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>企画の情報</CardTitle>
      </CardHeader>
      <CardContent>
        <p>一組当たりのプレイ時間:{attraction.playTime}分</p>
        <p>一組当たりの最大人数:{attraction.peopleCapacity}人</p>
      </CardContent>
    </Card>
  );
}
