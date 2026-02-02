import * as z from 'zod';
// prettier-ignore
export const PushSubscriptionInputSchema = z.object({
    id: z.string(),
    endpoint: z.string(),
    p256dh: z.string(),
    auth: z.string(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PushSubscriptionInputType = z.infer<typeof PushSubscriptionInputSchema>;
