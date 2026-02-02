import * as z from 'zod';
export const AttractionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  storeId: z.string(),
  store: z.unknown(),
  tickets: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});