import * as z from 'zod';

export const AttractionScalarFieldEnumSchema = z.enum(['id', 'storeId', 'createdAt', 'updatedAt'])

export type AttractionScalarFieldEnum = z.infer<typeof AttractionScalarFieldEnumSchema>;