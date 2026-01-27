import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema'

const nestedenumstockchangedreasonfilterSchema = z.object({
  equals: StockChangedReasonSchema.optional(),
  in: StockChangedReasonSchema.array().optional(),
  notIn: StockChangedReasonSchema.array().optional(),
  not: z.union([StockChangedReasonSchema, z.lazy(() => NestedEnumStockChangedReasonFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStockChangedReasonFilterObjectSchema: z.ZodType<Prisma.NestedEnumStockChangedReasonFilter> = nestedenumstockchangedreasonfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStockChangedReasonFilter>;
export const NestedEnumStockChangedReasonFilterObjectZodSchema = nestedenumstockchangedreasonfilterSchema;
