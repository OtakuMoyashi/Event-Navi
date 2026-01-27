import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StockLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StockLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogCountOrderByAggregateInput>;
export const StockLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
