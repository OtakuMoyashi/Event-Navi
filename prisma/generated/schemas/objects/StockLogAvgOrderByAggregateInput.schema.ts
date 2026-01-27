import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  change: SortOrderSchema.optional()
}).strict();
export const StockLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StockLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogAvgOrderByAggregateInput>;
export const StockLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
