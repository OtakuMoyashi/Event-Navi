import * as z from 'zod';
export const AdminFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional(),
  role: z.unknown(),
  eventId: z.string().optional(),
  event: z.unknown().optional(),
  storeId: z.string().optional(),
  store: z.unknown().optional(),
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