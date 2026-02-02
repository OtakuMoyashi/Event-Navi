import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './objects/ItemOrderByWithRelationInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemScalarFieldEnumSchema } from './enums/ItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ItemFindManySelectSchema: z.ZodType<Prisma.ItemSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    stock: z.boolean().optional(),
    stocklog: z.boolean().optional(),
    foodId: z.boolean().optional(),
    food: z.boolean().optional(),
    price: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ItemSelect>;

export const ItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    stock: z.boolean().optional(),
    stocklog: z.boolean().optional(),
    foodId: z.boolean().optional(),
    food: z.boolean().optional(),
    price: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ItemFindManySchema: z.ZodType<Prisma.ItemFindManyArgs> = z.object({ select: ItemFindManySelectSchema.optional(), include: z.lazy(() => ItemIncludeObjectSchema.optional()), orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ItemScalarFieldEnumSchema, ItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ItemFindManyArgs>;

export const ItemFindManyZodSchema = z.object({ select: ItemFindManySelectSchema.optional(), include: z.lazy(() => ItemIncludeObjectSchema.optional()), orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ItemScalarFieldEnumSchema, ItemScalarFieldEnumSchema.array()]).optional() }).strict();