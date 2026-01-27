import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStockChangedReasonFilterObjectSchema as NestedEnumStockChangedReasonFilterObjectSchema } from './NestedEnumStockChangedReasonFilter.schema'

const nestedenumstockchangedreasonwithaggregatesfilterSchema = z.object({
  equals: StockChangedReasonSchema.optional(),
  in: StockChangedReasonSchema.array().optional(),
  notIn: StockChangedReasonSchema.array().optional(),
  not: z.union([StockChangedReasonSchema, z.lazy(() => NestedEnumStockChangedReasonWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStockChangedReasonFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStockChangedReasonFilterObjectSchema).optional()
}).strict();
export const NestedEnumStockChangedReasonWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumStockChangedReasonWithAggregatesFilter> = nestedenumstockchangedreasonwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStockChangedReasonWithAggregatesFilter>;
export const NestedEnumStockChangedReasonWithAggregatesFilterObjectZodSchema = nestedenumstockchangedreasonwithaggregatesfilterSchema;
