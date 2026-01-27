import * as z from 'zod';
// prettier-ignore
export const FoodResultSchema = z.object({
    id: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    item: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FoodResultType = z.infer<typeof FoodResultSchema>;
