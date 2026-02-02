import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { NestedEnumStockChangedReasonWithAggregatesFilterObjectSchema as NestedEnumStockChangedReasonWithAggregatesFilterObjectSchema } from './NestedEnumStockChangedReasonWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStockChangedReasonFilterObjectSchema as NestedEnumStockChangedReasonFilterObjectSchema } from './NestedEnumStockChangedReasonFilter.schema'

const makeSchema = () => z.object({
  equals: StockChangedReasonSchema.optional(),
  in: StockChangedReasonSchema.array().optional(),
  notIn: StockChangedReasonSchema.array().optional(),
  not: z.union([StockChangedReasonSchema, z.lazy(() => NestedEnumStockChangedReasonWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStockChangedReasonFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStockChangedReasonFilterObjectSchema).optional()
}).strict();
export const EnumStockChangedReasonWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumStockChangedReasonWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStockChangedReasonWithAggregatesFilter>;
export const EnumStockChangedReasonWithAggregatesFilterObjectZodSchema = makeSchema();
