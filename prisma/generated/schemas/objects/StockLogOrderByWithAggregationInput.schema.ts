import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StockLogCountOrderByAggregateInputObjectSchema as StockLogCountOrderByAggregateInputObjectSchema } from './StockLogCountOrderByAggregateInput.schema';
import { StockLogAvgOrderByAggregateInputObjectSchema as StockLogAvgOrderByAggregateInputObjectSchema } from './StockLogAvgOrderByAggregateInput.schema';
import { StockLogMaxOrderByAggregateInputObjectSchema as StockLogMaxOrderByAggregateInputObjectSchema } from './StockLogMaxOrderByAggregateInput.schema';
import { StockLogMinOrderByAggregateInputObjectSchema as StockLogMinOrderByAggregateInputObjectSchema } from './StockLogMinOrderByAggregateInput.schema';
import { StockLogSumOrderByAggregateInputObjectSchema as StockLogSumOrderByAggregateInputObjectSchema } from './StockLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StockLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StockLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StockLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StockLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StockLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StockLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StockLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogOrderByWithAggregationInput>;
export const StockLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
