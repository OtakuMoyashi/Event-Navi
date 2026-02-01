import * as z from 'zod';
export const ItemDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  stock: z.number().int(),
  stocklog: z.unknown().optional(),
  foodId: z.string(),
  food: z.unknown(),
  price: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));