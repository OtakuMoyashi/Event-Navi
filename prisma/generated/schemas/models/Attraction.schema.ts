import * as z from 'zod';

export const AttractionSchema = z.object({
  id: z.string(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AttractionType = z.infer<typeof AttractionSchema>;
