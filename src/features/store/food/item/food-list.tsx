import { db } from "@/index";
import { foods, items } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";

interface FoodItemListProps {
  storeId: string;
}

export default async function FoodItemList({ storeId }: FoodItemListProps) {
  const foodRows = await db
    .select()
    .from(foods)
    .where(eq(foods.storeId, storeId))
    .limit(1);
  const food = foodRows[0];
  if (!food) {
    return <p>模擬店が存在しません。</p>;
  }
  const itemList = await db
    .select()
    .from(items)
    .where(eq(items.foodId, food.id));
  return (
    <div className="space-y-4">
      <h1>商品一覧</h1>
      {itemList.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>商品名</TableHead>
              <TableHead>価格（円）</TableHead>
              <TableHead>在庫数（個）</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  {new Date(item.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <NotFoundPrompt contentName="発行された整理券" />
      )}
    </div>
  );
}
