import * as z from 'zod';
export const StaffUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional(),
  storeId: z.string(),
  store: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));