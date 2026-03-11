import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/index";
import { attractions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface AttractionInfoProps {
  attractionId: string;
}

export default async function AttractionInfo({
  attractionId,
}: AttractionInfoProps) {
  const rows = await db
    .select()
    .from(attractions)
    .where(eq(attractions.id, attractionId))
    .limit(1);
  const attraction = rows[0];
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
