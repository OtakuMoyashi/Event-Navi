import * as z from 'zod';

export const TicketStatusSchema = z.enum(['ISSUED', 'CALLED', 'COMPLETED', 'CANCELLED'])

export type TicketStatus = z.infer<typeof TicketStatusSchema>;