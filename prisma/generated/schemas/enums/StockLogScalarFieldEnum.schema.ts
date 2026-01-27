import * as z from 'zod';

export const StockLogScalarFieldEnumSchema = z.enum(['id', 'itemId', 'change', 'reason', 'createdAt', 'updatedAt'])

export type StockLogScalarFieldEnum = z.infer<typeof StockLogScalarFieldEnumSchema>;