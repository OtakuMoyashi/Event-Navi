import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  change: z.literal(true).optional()
}).strict();
export const StockLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.StockLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StockLogAvgAggregateInputType>;
export const StockLogAvgAggregateInputObjectZodSchema = makeSchema();
