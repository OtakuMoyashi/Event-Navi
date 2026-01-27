import * as z from 'zod';
// prettier-ignore
export const ItemModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number().int().nullable(),
    stock: z.number().int().nullable(),
    stocklog: z.unknown().nullable(),
    foodId: z.string(),
    food: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ItemPureType = z.infer<typeof ItemModelSchema>;
