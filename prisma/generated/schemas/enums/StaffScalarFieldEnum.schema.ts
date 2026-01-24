import * as z from 'zod';

export const StaffScalarFieldEnumSchema = z.enum(['id', 'supabaseUserId', 'email', 'storeId', 'createdAt', 'updatedAt'])

export type StaffScalarFieldEnum = z.infer<typeof StaffScalarFieldEnumSchema>;