import * as z from 'zod';

export const ItemScalarFieldEnumSchema = z.enum(['id', 'name', 'price', 'stock', 'foodId', 'createdAt', 'updatedAt'])

export type ItemScalarFieldEnum = z.infer<typeof ItemScalarFieldEnumSchema>;