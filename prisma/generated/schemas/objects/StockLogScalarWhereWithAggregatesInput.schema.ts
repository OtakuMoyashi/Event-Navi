import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumStockChangedReasonWithAggregatesFilterObjectSchema as EnumStockChangedReasonWithAggregatesFilterObjectSchema } from './EnumStockChangedReasonWithAggregatesFilter.schema';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const stocklogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StockLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StockLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StockLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StockLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StockLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  change: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => EnumStockChangedReasonWithAggregatesFilterObjectSchema), StockChangedReasonSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StockLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StockLogScalarWhereWithAggregatesInput> = stocklogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StockLogScalarWhereWithAggregatesInput>;
export const StockLogScalarWhereWithAggregatesInputObjectZodSchema = stocklogscalarwherewithaggregatesinputSchema;
