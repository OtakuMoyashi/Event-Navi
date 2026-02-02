import * as z from 'zod';
export const AttractionDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  storeId: z.string(),
  store: z.unknown(),
  tickets: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));