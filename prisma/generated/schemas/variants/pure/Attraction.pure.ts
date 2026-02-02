import * as z from 'zod';
// prettier-ignore
export const AttractionModelSchema = z.object({
    id: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    tickets: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AttractionPureType = z.infer<typeof AttractionModelSchema>;
