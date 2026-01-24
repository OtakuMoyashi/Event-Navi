import * as z from 'zod';

export const PushSubscriptionScalarFieldEnumSchema = z.enum(['id', 'endpoint', 'p256dh', 'auth', 'userId', 'createdAt', 'updatedAt'])

export type PushSubscriptionScalarFieldEnum = z.infer<typeof PushSubscriptionScalarFieldEnumSchema>;