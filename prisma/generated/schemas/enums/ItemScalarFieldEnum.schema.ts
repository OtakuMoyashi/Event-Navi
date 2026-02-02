import * as z from 'zod';

export const ItemScalarFieldEnumSchema = z.enum(['id', 'name', 'stock', 'foodId', 'price', 'createdAt', 'updatedAt'])

export type ItemScalarFieldEnum = z.infer<typeof ItemScalarFieldEnumSchema>;