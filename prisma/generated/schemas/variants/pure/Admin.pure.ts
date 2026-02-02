import * as z from 'zod';
import { AdminRoleSchema } from '../../enums/AdminRole.schema';
// prettier-ignore
export const AdminModelSchema = z.object({
    id: z.string(),
    supabaseUserId: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    role: AdminRoleSchema,
    eventId: z.string().nullable(),
    event: z.unknown().nullable(),
    storeId: z.string().nullable(),
    store: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AdminPureType = z.infer<typeof AdminModelSchema>;
