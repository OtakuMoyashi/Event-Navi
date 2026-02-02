import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StoreScalarRelationFilterObjectSchema as StoreScalarRelationFilterObjectSchema } from './StoreScalarRelationFilter.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { ItemNullableScalarRelationFilterObjectSchema as ItemNullableScalarRelationFilterObjectSchema } from './ItemNullableScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const foodwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FoodWhereInputObjectSchema), z.lazy(() => FoodWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FoodWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FoodWhereInputObjectSchema), z.lazy(() => FoodWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  storeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  store: z.union([z.lazy(() => StoreScalarRelationFilterObjectSchema), z.lazy(() => StoreWhereInputObjectSchema)]).optional(),
  item: z.union([z.lazy(() => ItemNullableScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
export const FoodWhereInputObjectSchema: z.ZodType<Prisma.FoodWhereInput> = foodwhereinputSchema as unknown as z.ZodType<Prisma.FoodWhereInput>;
export const FoodWhereInputObjectZodSchema = foodwhereinputSchema;
