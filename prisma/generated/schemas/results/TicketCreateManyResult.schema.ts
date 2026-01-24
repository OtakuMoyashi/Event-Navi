import * as z from 'zod';
export const TicketCreateManyResultSchema = z.object({
  count: z.number()
});