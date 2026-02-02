import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodOrderByWithRelationInputObjectSchema as FoodOrderByWithRelationInputObjectSchema } from './objects/FoodOrderByWithRelationInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';
import { FoodScalarFieldEnumSchema } from './enums/FoodScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FoodFindFirstSelectSchema: z.ZodType<Prisma.FoodSelect> = z.object({
    id: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    item: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FoodSelect>;

export const FoodFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    storeId: z.boolean().optional(),
    store: z.boolean().optional(),
    item: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const FoodFindFirstSchema: z.ZodType<Prisma.FoodFindFirstArgs> = z.object({ select: FoodFindFirstSelectSchema.optional(), include: z.lazy(() => FoodIncludeObjectSchema.optional()), orderBy: z.union([FoodOrderByWithRelationInputObjectSchema, FoodOrderByWithRelationInputObjectSchema.array()]).optional(), where: FoodWhereInputObjectSchema.optional(), cursor: FoodWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FoodScalarFieldEnumSchema, FoodScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FoodFindFirstArgs>;

export const FoodFindFirstZodSchema = z.object({ select: FoodFindFirstSelectSchema.optional(), include: z.lazy(() => FoodIncludeObjectSchema.optional()), orderBy: z.union([FoodOrderByWithRelationInputObjectSchema, FoodOrderByWithRelationInputObjectSchema.array()]).optional(), where: FoodWhereInputObjectSchema.optional(), cursor: FoodWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FoodScalarFieldEnumSchema, FoodScalarFieldEnumSchema.array()]).optional() }).strict();