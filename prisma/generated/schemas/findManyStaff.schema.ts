import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffOrderByWithRelationInputObjectSchema as StaffOrderByWithRelationInputObjectSchema } from './objects/StaffOrderByWithRelationInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';
import { StaffScalarFieldEnumSchema } from './enums/StaffScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StaffFindManySelectSchema: z.ZodType<Prisma.StaffSelect> = z.object({
    id: z.boolean().optional(),
    supabaseUserId: z.boolean().optional(),
    email: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StaffSelect>;

export const StaffFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    supabaseUserId: z.boolean().optional(),
    email: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const StaffFindManySchema: z.ZodType<Prisma.StaffFindManyArgs> = z.object({ select: StaffFindManySelectSchema.optional(), include: z.lazy(() => StaffIncludeObjectSchema.optional()), orderBy: z.union([StaffOrderByWithRelationInputObjectSchema, StaffOrderByWithRelationInputObjectSchema.array()]).optional(), where: StaffWhereInputObjectSchema.optional(), cursor: StaffWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StaffScalarFieldEnumSchema, StaffScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StaffFindManyArgs>;

export const StaffFindManyZodSchema = z.object({ select: StaffFindManySelectSchema.optional(), include: z.lazy(() => StaffIncludeObjectSchema.optional()), orderBy: z.union([StaffOrderByWithRelationInputObjectSchema, StaffOrderByWithRelationInputObjectSchema.array()]).optional(), where: StaffWhereInputObjectSchema.optional(), cursor: StaffWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StaffScalarFieldEnumSchema, StaffScalarFieldEnumSchema.array()]).optional() }).strict();