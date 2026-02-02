import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumAdminRoleFilterObjectSchema as EnumAdminRoleFilterObjectSchema } from './EnumAdminRoleFilter.schema';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const adminscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AdminScalarWhereInputObjectSchema), z.lazy(() => AdminScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AdminScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdminScalarWhereInputObjectSchema), z.lazy(() => AdminScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supabaseUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumAdminRoleFilterObjectSchema), AdminRoleSchema]).optional(),
  eventId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storeId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AdminScalarWhereInputObjectSchema: z.ZodType<Prisma.AdminScalarWhereInput> = adminscalarwhereinputSchema as unknown as z.ZodType<Prisma.AdminScalarWhereInput>;
export const AdminScalarWhereInputObjectZodSchema = adminscalarwhereinputSchema;
