import prisma from "@/lib/prisma";
import CreateStockLogForm from "./create-form";

interface CreateStockLogProps {
  storeId: string;
}

export default async function CreateStockLog({ storeId }: CreateStockLogProps) {
  const food = await prisma.food.findUnique({
    where: {
      storeId: storeId,
    },
  });
  if (!food) {
    return <p>模擬店が存在しません。</p>;
  }
  const items = await prisma.item.findMany({
    where: {
      foodId: food.id,
    },
  });

  if (items.length === 0) {
    return <p>商品が存在しません。</p>;
  }

  return <CreateStockLogForm items={items} />;
}
