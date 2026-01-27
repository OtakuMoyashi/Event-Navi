import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StockLogNullableScalarRelationFilterObjectSchema as StockLogNullableScalarRelationFilterObjectSchema } from './StockLogNullableScalarRelationFilter.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './StockLogWhereInput.schema';
import { FoodScalarRelationFilterObjectSchema as FoodScalarRelationFilterObjectSchema } from './FoodScalarRelationFilter.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema'

const itemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  stock: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  foodId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  stocklog: z.union([z.lazy(() => StockLogNullableScalarRelationFilterObjectSchema), z.lazy(() => StockLogWhereInputObjectSchema)]).optional(),
  food: z.union([z.lazy(() => FoodScalarRelationFilterObjectSchema), z.lazy(() => FoodWhereInputObjectSchema)]).optional()
}).strict();
export const ItemWhereInputObjectSchema: z.ZodType<Prisma.ItemWhereInput> = itemwhereinputSchema as unknown as z.ZodType<Prisma.ItemWhereInput>;
export const ItemWhereInputObjectZodSchema = itemwhereinputSchema;
