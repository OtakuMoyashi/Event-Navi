import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumStockChangedReasonFilterObjectSchema as EnumStockChangedReasonFilterObjectSchema } from './EnumStockChangedReasonFilter.schema';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ItemScalarRelationFilterObjectSchema as ItemScalarRelationFilterObjectSchema } from './ItemScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const stocklogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StockLogWhereInputObjectSchema), z.lazy(() => StockLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StockLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StockLogWhereInputObjectSchema), z.lazy(() => StockLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  change: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => EnumStockChangedReasonFilterObjectSchema), StockChangedReasonSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  item: z.union([z.lazy(() => ItemScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
export const StockLogWhereInputObjectSchema: z.ZodType<Prisma.StockLogWhereInput> = stocklogwhereinputSchema as unknown as z.ZodType<Prisma.StockLogWhereInput>;
export const StockLogWhereInputObjectZodSchema = stocklogwhereinputSchema;
