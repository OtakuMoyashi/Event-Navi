import * as z from 'zod';
export const StaffCreateResultSchema = z.object({
  id: z.string(),
  supabaseUserId: z.string(),
  email: z.string(),
  storeId: z.string(),
  store: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});