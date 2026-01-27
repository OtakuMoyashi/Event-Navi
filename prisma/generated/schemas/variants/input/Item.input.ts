import * as z from 'zod';
// prettier-ignore
export const ItemInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number().int().optional().nullable(),
    stock: z.number().int().optional().nullable(),
    stocklog: z.unknown().optional().nullable(),
    foodId: z.string(),
    food: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ItemInputType = z.infer<typeof ItemInputSchema>;
