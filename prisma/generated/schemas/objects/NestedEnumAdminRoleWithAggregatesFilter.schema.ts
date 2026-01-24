import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAdminRoleFilterObjectSchema as NestedEnumAdminRoleFilterObjectSchema } from './NestedEnumAdminRoleFilter.schema'

const nestedenumadminrolewithaggregatesfilterSchema = z.object({
  equals: AdminRoleSchema.optional(),
  in: AdminRoleSchema.array().optional(),
  notIn: AdminRoleSchema.array().optional(),
  not: z.union([AdminRoleSchema, z.lazy(() => NestedEnumAdminRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAdminRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAdminRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumAdminRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAdminRoleWithAggregatesFilter> = nestedenumadminrolewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAdminRoleWithAggregatesFilter>;
export const NestedEnumAdminRoleWithAggregatesFilterObjectZodSchema = nestedenumadminrolewithaggregatesfilterSchema;
