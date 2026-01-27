import * as z from 'zod';
export const ItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    price: z.number(),
    stock: z.number(),
    stocklog: z.number(),
    foodId: z.number(),
    food: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable(),
    stock: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable(),
    stock: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    price: z.number().int().nullable(),
    stock: z.number().int().nullable(),
    foodId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    price: z.number().int().nullable(),
    stock: z.number().int().nullable(),
    foodId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});