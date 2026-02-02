import * as z from 'zod';

export const TicketScalarFieldEnumSchema = z.enum(['id', 'index', 'numberOfPeople', 'status', 'attractionId', 'userId', 'createdAt', 'updatedAt'])

export type TicketScalarFieldEnum = z.infer<typeof TicketScalarFieldEnumSchema>;