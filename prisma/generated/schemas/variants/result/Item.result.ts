import * as z from 'zod';
// prettier-ignore
export const ItemResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    stock: z.number().int(),
    stocklog: z.unknown().nullable(),
    foodId: z.string(),
    food: z.unknown(),
    price: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ItemResultType = z.infer<typeof ItemResultSchema>;
