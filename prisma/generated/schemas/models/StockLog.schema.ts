import * as z from 'zod';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';

export const StockLogSchema = z.object({
  id: z.string(),
  itemId: z.string(),
  change: z.number().int(),
  reason: StockChangedReasonSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type StockLogType = z.infer<typeof StockLogSchema>;
