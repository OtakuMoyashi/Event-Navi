import * as z from 'zod';
export const StoreAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    slug: z.number(),
    name: z.number(),
    isActive: z.number(),
    startedAt: z.number(),
    finishedAt: z.number(),
    description: z.number(),
    storeType: z.number(),
    attraction: z.number(),
    food: z.number(),
    event: z.number(),
    eventId: z.number(),
    admins: z.number(),
    staffs: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    slug: z.string().nullable(),
    name: z.string().nullable(),
    startedAt: z.date().nullable(),
    finishedAt: z.date().nullable(),
    description: z.string().nullable(),
    eventId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    slug: z.string().nullable(),
    name: z.string().nullable(),
    startedAt: z.date().nullable(),
    finishedAt: z.date().nullable(),
    description: z.string().nullable(),
    eventId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});