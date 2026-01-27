import * as z from 'zod';
import { StockChangedReasonSchema } from '../../enums/StockChangedReason.schema';
// prettier-ignore
export const StockLogResultSchema = z.object({
    id: z.string(),
    itemId: z.string(),
    item: z.unknown(),
    change: z.number().int(),
    reason: StockChangedReasonSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StockLogResultType = z.infer<typeof StockLogResultSchema>;
