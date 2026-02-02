import * as z from 'zod';

export const StaffSchema = z.object({
  id: z.string(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type StaffType = z.infer<typeof StaffSchema>;
