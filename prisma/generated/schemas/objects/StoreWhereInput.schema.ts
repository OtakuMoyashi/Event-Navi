import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumStoreTypeFilterObjectSchema as EnumStoreTypeFilterObjectSchema } from './EnumStoreTypeFilter.schema';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AttractionNullableScalarRelationFilterObjectSchema as AttractionNullableScalarRelationFilterObjectSchema } from './AttractionNullableScalarRelationFilter.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema';
import { FoodNullableScalarRelationFilterObjectSchema as FoodNullableScalarRelationFilterObjectSchema } from './FoodNullableScalarRelationFilter.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema';
import { EventNullableScalarRelationFilterObjectSchema as EventNullableScalarRelationFilterObjectSchema } from './EventNullableScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { AdminListRelationFilterObjectSchema as AdminListRelationFilterObjectSchema } from './AdminListRelationFilter.schema';
import { StaffListRelationFilterObjectSchema as StaffListRelationFilterObjectSchema } from './StaffListRelationFilter.schema'

const storewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StoreWhereInputObjectSchema), z.lazy(() => StoreWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StoreWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StoreWhereInputObjectSchema), z.lazy(() => StoreWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  attraction: z.union([z.lazy(() => AttractionNullableScalarRelationFilterObjectSchema), z.lazy(() => AttractionWhereInputObjectSchema)]).optional(),
  food: z.union([z.lazy(() => FoodNullableScalarRelationFilterObjectSchema), z.lazy(() => FoodWhereInputObjectSchema)]).optional(),
  event: z.union([z.lazy(() => EventNullableScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  admins: z.lazy(() => AdminListRelationFilterObjectSchema).optional(),
  staffs: z.lazy(() => StaffListRelationFilterObjectSchema).optional()
}).strict();
export const StoreWhereInputObjectSchema: z.ZodType<Prisma.StoreWhereInput> = storewhereinputSchema as unknown as z.ZodType<Prisma.StoreWhereInput>;
export const StoreWhereInputObjectZodSchema = storewhereinputSchema;
