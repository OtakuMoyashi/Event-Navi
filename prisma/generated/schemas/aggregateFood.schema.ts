import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodOrderByWithRelationInputObjectSchema as FoodOrderByWithRelationInputObjectSchema } from './objects/FoodOrderByWithRelationInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';
import { FoodCountAggregateInputObjectSchema as FoodCountAggregateInputObjectSchema } from './objects/FoodCountAggregateInput.schema';
import { FoodMinAggregateInputObjectSchema as FoodMinAggregateInputObjectSchema } from './objects/FoodMinAggregateInput.schema';
import { FoodMaxAggregateInputObjectSchema as FoodMaxAggregateInputObjectSchema } from './objects/FoodMaxAggregateInput.schema';

export const FoodAggregateSchema: z.ZodType<Prisma.FoodAggregateArgs> = z.object({ orderBy: z.union([FoodOrderByWithRelationInputObjectSchema, FoodOrderByWithRelationInputObjectSchema.array()]).optional(), where: FoodWhereInputObjectSchema.optional(), cursor: FoodWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FoodCountAggregateInputObjectSchema ]).optional(), _min: FoodMinAggregateInputObjectSchema.optional(), _max: FoodMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FoodAggregateArgs>;

export const FoodAggregateZodSchema = z.object({ orderBy: z.union([FoodOrderByWithRelationInputObjectSchema, FoodOrderByWithRelationInputObjectSchema.array()]).optional(), where: FoodWhereInputObjectSchema.optional(), cursor: FoodWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FoodCountAggregateInputObjectSchema ]).optional(), _min: FoodMinAggregateInputObjectSchema.optional(), _max: FoodMaxAggregateInputObjectSchema.optional() }).strict();