import * as z from 'zod';
export const FoodUpsertResultSchema = z.object({
  id: z.string(),
  storeId: z.string(),
  store: z.unknown(),
  item: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});