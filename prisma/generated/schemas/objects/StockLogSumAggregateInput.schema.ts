import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  change: z.literal(true).optional()
}).strict();
export const StockLogSumAggregateInputObjectSchema: z.ZodType<Prisma.StockLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StockLogSumAggregateInputType>;
export const StockLogSumAggregateInputObjectZodSchema = makeSchema();
