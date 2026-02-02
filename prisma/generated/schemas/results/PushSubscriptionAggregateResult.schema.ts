import * as z from 'zod';
export const PushSubscriptionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    endpoint: z.number(),
    p256dh: z.number(),
    auth: z.number(),
    userId: z.number(),
    user: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    endpoint: z.string().nullable(),
    p256dh: z.string().nullable(),
    auth: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    endpoint: z.string().nullable(),
    p256dh: z.string().nullable(),
    auth: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});