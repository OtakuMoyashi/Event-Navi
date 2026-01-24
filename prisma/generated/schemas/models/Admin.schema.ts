import * as z from 'zod';
import { AdminRoleSchema } from '../enums/AdminRole.schema';

export const AdminSchema = z.object({
  id: z.string(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  role: AdminRoleSchema,
  eventId: z.string().nullish(),
  storeId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AdminType = z.infer<typeof AdminSchema>;
