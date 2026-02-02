import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.string(),
  tickets: z.array(z.unknown()),
  pushSubscriptions: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});