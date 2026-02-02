import * as z from 'zod';
export const StockLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    itemId: z.number(),
    item: z.number(),
    change: z.number(),
    reason: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    change: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    change: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    itemId: z.string().nullable(),
    change: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    itemId: z.string().nullable(),
    change: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});