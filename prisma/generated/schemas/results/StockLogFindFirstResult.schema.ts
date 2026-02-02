import * as z from 'zod';
export const StockLogFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  itemId: z.string(),
  item: z.unknown(),
  change: z.number().int(),
  reason: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));