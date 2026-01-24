import * as z from 'zod';
export const AttractionUpsertResultSchema = z.object({
  id: z.string(),
  storeId: z.string(),
  store: z.unknown(),
  tickets: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});