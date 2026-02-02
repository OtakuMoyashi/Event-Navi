import * as z from 'zod';

export const StockChangedReasonSchema = z.enum(['SELLING'])

export type StockChangedReason = z.infer<typeof StockChangedReasonSchema>;