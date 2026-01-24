import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AdminIncludeObjectSchema as AdminIncludeObjectSchema } from './objects/AdminInclude.schema';
import { AdminOrderByWithRelationInputObjectSchema as AdminOrderByWithRelationInputObjectSchema } from './objects/AdminOrderByWithRelationInput.schema';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './objects/AdminWhereInput.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './objects/AdminWhereUniqueInput.schema';
import { AdminScalarFieldEnumSchema } from './enums/AdminScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AdminFindFirstSelectSchema: z.ZodType<Prisma.AdminSelect> = z.object({
    id: z.boolean().optional(),
    supabaseUserId: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    eventId: z.boolean().optional(),
    event: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AdminSelect>;

export const AdminFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    supabaseUserId: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    eventId: z.boolean().optional(),
    event: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const AdminFindFirstSchema: z.ZodType<Prisma.AdminFindFirstArgs> = z.object({ select: AdminFindFirstSelectSchema.optional(), include: z.lazy(() => AdminIncludeObjectSchema.optional()), orderBy: z.union([AdminOrderByWithRelationInputObjectSchema, AdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdminWhereInputObjectSchema.optional(), cursor: AdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AdminScalarFieldEnumSchema, AdminScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AdminFindFirstArgs>;

export const AdminFindFirstZodSchema = z.object({ select: AdminFindFirstSelectSchema.optional(), include: z.lazy(() => AdminIncludeObjectSchema.optional()), orderBy: z.union([AdminOrderByWithRelationInputObjectSchema, AdminOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdminWhereInputObjectSchema.optional(), cursor: AdminWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AdminScalarFieldEnumSchema, AdminScalarFieldEnumSchema.array()]).optional() }).strict();