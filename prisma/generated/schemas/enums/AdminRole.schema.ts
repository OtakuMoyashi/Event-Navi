import * as z from 'zod';

export const AdminRoleSchema = z.enum(['SYSTEM_ADMIN', 'EVENT_ADMIN', 'STORE_ADMIN'])

export type AdminRole = z.infer<typeof AdminRoleSchema>;