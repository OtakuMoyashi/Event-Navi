import prisma from "@/lib/prisma";
import UpdateAttractionConfigForm from "./update-form";

interface UpdateAttractionConfigProps {
  attractionId: string;
}

export default async function UpdateAttractionConfig({
  attractionId,
}: UpdateAttractionConfigProps) {
  const attraction = await prisma.attraction.findUnique({
    where: {
      id: attractionId,
    },
  });
  if (!attraction) {
    return <p>企画が存在しません。</p>;
  }
  return <UpdateAttractionConfigForm attraction={attraction} />;
}
