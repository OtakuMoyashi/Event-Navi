import * as z from 'zod';
// prettier-ignore
export const ItemInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    stock: z.number().int(),
    stocklog: z.unknown().optional().nullable(),
    foodId: z.string(),
    food: z.unknown(),
    price: z.number().int().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ItemInputType = z.infer<typeof ItemInputSchema>;
