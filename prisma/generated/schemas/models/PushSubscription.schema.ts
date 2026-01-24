import * as z from 'zod';

export const PushSubscriptionSchema = z.object({
  id: z.string(),
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PushSubscriptionType = z.infer<typeof PushSubscriptionSchema>;
