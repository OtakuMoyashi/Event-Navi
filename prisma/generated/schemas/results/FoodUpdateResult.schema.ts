import * as z from 'zod';
export const FoodUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  storeId: z.string(),
  store: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));