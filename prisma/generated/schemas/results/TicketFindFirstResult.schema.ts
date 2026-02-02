import * as z from 'zod';
export const TicketFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: z.unknown(),
  attractionId: z.string(),
  attraction: z.unknown(),
  userId: z.string(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));