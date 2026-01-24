import * as z from 'zod';
export const PushSubscriptionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
  userId: z.string(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));