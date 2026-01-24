import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumAdminRoleWithAggregatesFilterObjectSchema as EnumAdminRoleWithAggregatesFilterObjectSchema } from './EnumAdminRoleWithAggregatesFilter.schema';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const adminscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AdminScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AdminScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AdminScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdminScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AdminScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  supabaseUserId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumAdminRoleWithAggregatesFilterObjectSchema), AdminRoleSchema]).optional(),
  eventId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  storeId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AdminScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AdminScalarWhereWithAggregatesInput> = adminscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AdminScalarWhereWithAggregatesInput>;
export const AdminScalarWhereWithAggregatesInputObjectZodSchema = adminscalarwherewithaggregatesinputSchema;
