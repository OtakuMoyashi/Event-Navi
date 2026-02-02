import * as z from 'zod';

export const StoreScalarFieldEnumSchema = z.enum(['id', 'slug', 'name', 'isActive', 'startedAt', 'finishedAt', 'description', 'storeType', 'eventId', 'createdAt', 'updatedAt'])

export type StoreScalarFieldEnum = z.infer<typeof StoreScalarFieldEnumSchema>;