import * as z from 'zod';
export const AdminUpsertResultSchema = z.object({
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
});