import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema'

const nestedenumadminrolefilterSchema = z.object({
  equals: AdminRoleSchema.optional(),
  in: AdminRoleSchema.array().optional(),
  notIn: AdminRoleSchema.array().optional(),
  not: z.union([AdminRoleSchema, z.lazy(() => NestedEnumAdminRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAdminRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumAdminRoleFilter> = nestedenumadminrolefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAdminRoleFilter>;
export const NestedEnumAdminRoleFilterObjectZodSchema = nestedenumadminrolefilterSchema;
