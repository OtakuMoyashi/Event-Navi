import * as z from 'zod';
export const ItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().int(),
  stock: z.number().int(),
  foodId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));