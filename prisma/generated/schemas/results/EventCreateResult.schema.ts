import * as z from 'zod';
export const EventCreateResultSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date().optional(),
  finishedAt: z.date().optional(),
  description: z.string().optional(),
  stores: z.array(z.unknown()),
  admins: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});