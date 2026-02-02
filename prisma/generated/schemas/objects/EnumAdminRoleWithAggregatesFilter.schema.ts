import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { NestedEnumAdminRoleWithAggregatesFilterObjectSchema as NestedEnumAdminRoleWithAggregatesFilterObjectSchema } from './NestedEnumAdminRoleWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAdminRoleFilterObjectSchema as NestedEnumAdminRoleFilterObjectSchema } from './NestedEnumAdminRoleFilter.schema'

const makeSchema = () => z.object({
  equals: AdminRoleSchema.optional(),
  in: AdminRoleSchema.array().optional(),
  notIn: AdminRoleSchema.array().optional(),
  not: z.union([AdminRoleSchema, z.lazy(() => NestedEnumAdminRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAdminRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAdminRoleFilterObjectSchema).optional()
}).strict();
export const EnumAdminRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAdminRoleWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAdminRoleWithAggregatesFilter>;
export const EnumAdminRoleWithAggregatesFilterObjectZodSchema = makeSchema();
