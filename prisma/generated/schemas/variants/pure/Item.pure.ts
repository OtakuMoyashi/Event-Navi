import * as z from 'zod';
// prettier-ignore
export const ItemModelSchema = z.object({
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

export type ItemPureType = z.infer<typeof ItemModelSchema>;
