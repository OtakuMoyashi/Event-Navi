import * as z from 'zod';
// prettier-ignore
export const FoodInputSchema = z.object({
    id: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FoodInputType = z.infer<typeof FoodInputSchema>;
