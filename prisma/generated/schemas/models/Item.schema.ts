import * as z from 'zod';

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().int().nullish(),
  stock: z.number().int().nullish(),
  foodId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ItemType = z.infer<typeof ItemSchema>;
