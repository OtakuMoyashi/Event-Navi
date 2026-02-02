import * as z from 'zod';
export const TicketFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});