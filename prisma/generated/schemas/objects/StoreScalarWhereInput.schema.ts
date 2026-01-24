import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumStoreTypeFilterObjectSchema as EnumStoreTypeFilterObjectSchema } from './EnumStoreTypeFilter.schema';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const storescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StoreScalarWhereInputObjectSchema), z.lazy(() => StoreScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StoreScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StoreScalarWhereInputObjectSchema), z.lazy(() => StoreScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  finishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storeType: z.union([z.lazy(() => EnumStoreTypeFilterObjectSchema), StoreTypeSchema]).optional(),
  eventId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StoreScalarWhereInputObjectSchema: z.ZodType<Prisma.StoreScalarWhereInput> = storescalarwhereinputSchema as unknown as z.ZodType<Prisma.StoreScalarWhereInput>;
export const StoreScalarWhereInputObjectZodSchema = storescalarwhereinputSchema;
