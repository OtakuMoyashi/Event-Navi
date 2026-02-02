import * as z from 'zod';

export const FoodScalarFieldEnumSchema = z.enum(['id', 'storeId', 'createdAt', 'updatedAt'])

export type FoodScalarFieldEnum = z.infer<typeof FoodScalarFieldEnumSchema>;