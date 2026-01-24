import * as z from 'zod';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';

export const TicketSchema = z.object({
  id: z.string(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.default("ISSUED"),
  attractionId: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TicketType = z.infer<typeof TicketSchema>;
