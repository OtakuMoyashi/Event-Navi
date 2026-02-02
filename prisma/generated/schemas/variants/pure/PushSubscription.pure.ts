import * as z from 'zod';
// prettier-ignore
export const PushSubscriptionModelSchema = z.object({
    id: z.string(),
    endpoint: z.string(),
    p256dh: z.string(),
    auth: z.string(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PushSubscriptionPureType = z.infer<typeof PushSubscriptionModelSchema>;
