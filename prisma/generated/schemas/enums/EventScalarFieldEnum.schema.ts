import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'slug', 'name', 'isActive', 'startedAt', 'finishedAt', 'description', 'createdAt', 'updatedAt'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;