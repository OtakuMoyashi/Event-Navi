import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  change: SortOrderSchema.optional()
}).strict();
export const StockLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StockLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogSumOrderByAggregateInput>;
export const StockLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
