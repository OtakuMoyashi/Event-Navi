import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  finishedAt: z.literal(true).optional(),
  description: z.literal(true).optional(),
  storeType: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StoreMinAggregateInputObjectSchema: z.ZodType<Prisma.StoreMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StoreMinAggregateInputType>;
export const StoreMinAggregateInputObjectZodSchema = makeSchema();
