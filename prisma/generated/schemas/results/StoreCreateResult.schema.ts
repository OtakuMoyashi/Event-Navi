import * as z from 'zod';
export const StoreCreateResultSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date().optional(),
  finishedAt: z.date().optional(),
  description: z.string().optional(),
  storeType: z.unknown(),
  attraction: z.unknown().optional(),
  food: z.unknown().optional(),
  event: z.unknown().optional(),
  eventId: z.string().optional(),
  admins: z.array(z.unknown()),
  staffs: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});