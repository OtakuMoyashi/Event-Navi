import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { NestedEnumStockChangedReasonFilterObjectSchema as NestedEnumStockChangedReasonFilterObjectSchema } from './NestedEnumStockChangedReasonFilter.schema'

const makeSchema = () => z.object({
  equals: StockChangedReasonSchema.optional(),
  in: StockChangedReasonSchema.array().optional(),
  notIn: StockChangedReasonSchema.array().optional(),
  not: z.union([StockChangedReasonSchema, z.lazy(() => NestedEnumStockChangedReasonFilterObjectSchema)]).optional()
}).strict();
export const EnumStockChangedReasonFilterObjectSchema: z.ZodType<Prisma.EnumStockChangedReasonFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStockChangedReasonFilter>;
export const EnumStockChangedReasonFilterObjectZodSchema = makeSchema();
