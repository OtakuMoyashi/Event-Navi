import * as z from 'zod';
export const ItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().int().optional(),
  stock: z.number().int().optional(),
  stocklog: z.unknown().optional(),
  foodId: z.string(),
  food: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));