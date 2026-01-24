import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { NestedEnumAdminRoleFilterObjectSchema as NestedEnumAdminRoleFilterObjectSchema } from './NestedEnumAdminRoleFilter.schema'

const makeSchema = () => z.object({
  equals: AdminRoleSchema.optional(),
  in: AdminRoleSchema.array().optional(),
  notIn: AdminRoleSchema.array().optional(),
  not: z.union([AdminRoleSchema, z.lazy(() => NestedEnumAdminRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumAdminRoleFilterObjectSchema: z.ZodType<Prisma.EnumAdminRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAdminRoleFilter>;
export const EnumAdminRoleFilterObjectZodSchema = makeSchema();
