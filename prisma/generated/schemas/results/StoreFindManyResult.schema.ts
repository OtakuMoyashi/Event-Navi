import * as z from 'zod';
export const StoreFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date().optional(),
  finishedAt: z.date().optional(),
  description: z.string().optional(),
  storeType: z.unknown(),
  attraction: z.unknown().optional(),
  food: z.unknown().optional(),
  event: z.unknown().optional(),
  eventId: z.string().optional(),
  admins: z.array(z.unknown()),
  staffs: z.array(z.unknown()),
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