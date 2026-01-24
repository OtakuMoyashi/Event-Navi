import * as z from 'zod';

export const FoodSchema = z.object({
  id: z.string(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type FoodType = z.infer<typeof FoodSchema>;
