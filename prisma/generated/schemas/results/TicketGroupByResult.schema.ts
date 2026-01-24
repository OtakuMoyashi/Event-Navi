import * as z from 'zod';
export const TicketGroupByResultSchema = z.array(z.object({
  id: z.string(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  attractionId: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    index: z.number(),
    numberOfPeople: z.number(),
    status: z.number(),
    attractionId: z.number(),
    attraction: z.number(),
    userId: z.number(),
    user: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    index: z.number().nullable(),
    numberOfPeople: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    index: z.number().nullable(),
    numberOfPeople: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    index: z.number().int().nullable(),
    numberOfPeople: z.number().int().nullable(),
    attractionId: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    index: z.number().int().nullable(),
    numberOfPeople: z.number().int().nullable(),
    attractionId: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));