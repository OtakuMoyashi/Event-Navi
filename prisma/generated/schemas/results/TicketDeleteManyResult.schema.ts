import * as z from 'zod';
export const TicketDeleteManyResultSchema = z.object({
  count: z.number()
});