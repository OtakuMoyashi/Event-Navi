import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodOrderByWithRelationInputObjectSchema as FoodOrderByWithRelationInputObjectSchema } from './objects/FoodOrderByWithRelationInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';
import { FoodCountAggregateInputObjectSchema as FoodCountAggregateInputObjectSchema } from './objects/FoodCountAggregateInput.schema';

export const FoodCountSchema: z.ZodType<Prisma.FoodCountArgs> = z.object({ orderBy: z.union([FoodOrderByWithRelationInputObjectSchema, FoodOrderByWithRelationInputObjectSchema.array()]).optional(), where: FoodWhereInputObjectSchema.optional(), cursor: FoodWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FoodCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FoodCountArgs>;

export const FoodCountZodSchema = z.object({ orderBy: z.union([FoodOrderByWithRelationInputObjectSchema, FoodOrderByWithRelationInputObjectSchema.array()]).optional(), where: FoodWhereInputObjectSchema.optional(), cursor: FoodWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FoodCountAggregateInputObjectSchema ]).optional() }).strict();