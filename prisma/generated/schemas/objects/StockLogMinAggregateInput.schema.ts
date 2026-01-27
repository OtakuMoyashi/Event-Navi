import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  change: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StockLogMinAggregateInputObjectSchema: z.ZodType<Prisma.StockLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StockLogMinAggregateInputType>;
export const StockLogMinAggregateInputObjectZodSchema = makeSchema();
