import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionIncludeObjectSchema as AttractionIncludeObjectSchema } from './objects/AttractionInclude.schema';
import { AttractionOrderByWithRelationInputObjectSchema as AttractionOrderByWithRelationInputObjectSchema } from './objects/AttractionOrderByWithRelationInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './objects/AttractionWhereInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './objects/AttractionWhereUniqueInput.schema';
import { AttractionScalarFieldEnumSchema } from './enums/AttractionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AttractionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AttractionSelect> = z.object({
    id: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    tickets: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AttractionSelect>;

export const AttractionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    tickets: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AttractionFindFirstOrThrowSchema: z.ZodType<Prisma.AttractionFindFirstOrThrowArgs> = z.object({ select: AttractionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AttractionIncludeObjectSchema.optional()), orderBy: z.union([AttractionOrderByWithRelationInputObjectSchema, AttractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttractionWhereInputObjectSchema.optional(), cursor: AttractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttractionScalarFieldEnumSchema, AttractionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AttractionFindFirstOrThrowArgs>;

export const AttractionFindFirstOrThrowZodSchema = z.object({ select: AttractionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AttractionIncludeObjectSchema.optional()), orderBy: z.union([AttractionOrderByWithRelationInputObjectSchema, AttractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttractionWhereInputObjectSchema.optional(), cursor: AttractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttractionScalarFieldEnumSchema, AttractionScalarFieldEnumSchema.array()]).optional() }).strict();