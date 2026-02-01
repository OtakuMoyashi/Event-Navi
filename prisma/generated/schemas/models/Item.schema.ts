import * as z from 'zod';

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  stock: z.number().int(),
  foodId: z.string(),
  price: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ItemType = z.infer<typeof ItemSchema>;
