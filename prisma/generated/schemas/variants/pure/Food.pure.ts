import * as z from 'zod';
// prettier-ignore
export const FoodModelSchema = z.object({
    id: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    item: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FoodPureType = z.infer<typeof FoodModelSchema>;
