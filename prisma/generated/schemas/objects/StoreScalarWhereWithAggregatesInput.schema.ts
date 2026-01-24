import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumStoreTypeWithAggregatesFilterObjectSchema as EnumStoreTypeWithAggregatesFilterObjectSchema } from './EnumStoreTypeWithAggregatesFilter.schema';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const storescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StoreScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StoreScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StoreScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StoreScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StoreScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  finishedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  storeType: z.union([z.lazy(() => EnumStoreTypeWithAggregatesFilterObjectSchema), StoreTypeSchema]).optional(),
  eventId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StoreScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StoreScalarWhereWithAggregatesInput> = storescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StoreScalarWhereWithAggregatesInput>;
export const StoreScalarWhereWithAggregatesInputObjectZodSchema = storescalarwherewithaggregatesinputSchema;
