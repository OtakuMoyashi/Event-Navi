import * as z from 'zod';
// prettier-ignore
export const AttractionInputSchema = z.object({
    id: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    tickets: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AttractionInputType = z.infer<typeof AttractionInputSchema>;
