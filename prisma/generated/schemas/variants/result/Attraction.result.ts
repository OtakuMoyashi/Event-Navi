import * as z from 'zod';
// prettier-ignore
export const AttractionResultSchema = z.object({
    id: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    tickets: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AttractionResultType = z.infer<typeof AttractionResultSchema>;
