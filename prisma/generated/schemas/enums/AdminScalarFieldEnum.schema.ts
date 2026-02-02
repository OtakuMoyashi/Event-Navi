import * as z from 'zod';

export const AdminScalarFieldEnumSchema = z.enum(['id', 'supabaseUserId', 'email', 'name', 'role', 'eventId', 'storeId', 'createdAt', 'updatedAt'])

export type AdminScalarFieldEnum = z.infer<typeof AdminScalarFieldEnumSchema>;