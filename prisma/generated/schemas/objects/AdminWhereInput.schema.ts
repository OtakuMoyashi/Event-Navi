import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumAdminRoleFilterObjectSchema as EnumAdminRoleFilterObjectSchema } from './EnumAdminRoleFilter.schema';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EventNullableScalarRelationFilterObjectSchema as EventNullableScalarRelationFilterObjectSchema } from './EventNullableScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { StoreNullableScalarRelationFilterObjectSchema as StoreNullableScalarRelationFilterObjectSchema } from './StoreNullableScalarRelationFilter.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const adminwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AdminWhereInputObjectSchema), z.lazy(() => AdminWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AdminWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdminWhereInputObjectSchema), z.lazy(() => AdminWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supabaseUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumAdminRoleFilterObjectSchema), AdminRoleSchema]).optional(),
  eventId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storeId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  event: z.union([z.lazy(() => EventNullableScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  store: z.union([z.lazy(() => StoreNullableScalarRelationFilterObjectSchema), z.lazy(() => StoreWhereInputObjectSchema)]).optional()
}).strict();
export const AdminWhereInputObjectSchema: z.ZodType<Prisma.AdminWhereInput> = adminwhereinputSchema as unknown as z.ZodType<Prisma.AdminWhereInput>;
export const AdminWhereInputObjectZodSchema = adminwhereinputSchema;
