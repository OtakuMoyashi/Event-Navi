import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const foodscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FoodScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FoodScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FoodScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FoodScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FoodScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  storeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FoodScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FoodScalarWhereWithAggregatesInput> = foodscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FoodScalarWhereWithAggregatesInput>;
export const FoodScalarWhereWithAggregatesInputObjectZodSchema = foodscalarwherewithaggregatesinputSchema;
