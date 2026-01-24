import * as z from 'zod';
import { AdminRoleSchema } from '../../enums/AdminRole.schema';
// prettier-ignore
export const AdminInputSchema = z.object({
    id: z.string(),
    supabaseUserId: z.string(),
    email: z.string(),
    name: z.string().optional().nullable(),
    role: AdminRoleSchema,
    eventId: z.string().optional().nullable(),
    event: z.unknown().optional().nullable(),
    storeId: z.string().optional().nullable(),
    store: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AdminInputType = z.infer<typeof AdminInputSchema>;
