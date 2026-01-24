import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';
import { FoodOrderByWithAggregationInputObjectSchema as FoodOrderByWithAggregationInputObjectSchema } from './objects/FoodOrderByWithAggregationInput.schema';
import { FoodScalarWhereWithAggregatesInputObjectSchema as FoodScalarWhereWithAggregatesInputObjectSchema } from './objects/FoodScalarWhereWithAggregatesInput.schema';
import { FoodScalarFieldEnumSchema } from './enums/FoodScalarFieldEnum.schema';
import { FoodCountAggregateInputObjectSchema as FoodCountAggregateInputObjectSchema } from './objects/FoodCountAggregateInput.schema';
import { FoodMinAggregateInputObjectSchema as FoodMinAggregateInputObjectSchema } from './objects/FoodMinAggregateInput.schema';
import { FoodMaxAggregateInputObjectSchema as FoodMaxAggregateInputObjectSchema } from './objects/FoodMaxAggregateInput.schema';

export const FoodGroupBySchema: z.ZodType<Prisma.FoodGroupByArgs> = z.object({ where: FoodWhereInputObjectSchema.optional(), orderBy: z.union([FoodOrderByWithAggregationInputObjectSchema, FoodOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FoodScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FoodScalarFieldEnumSchema), _count: z.union([ z.literal(true), FoodCountAggregateInputObjectSchema ]).optional(), _min: FoodMinAggregateInputObjectSchema.optional(), _max: FoodMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FoodGroupByArgs>;

export const FoodGroupByZodSchema = z.object({ where: FoodWhereInputObjectSchema.optional(), orderBy: z.union([FoodOrderByWithAggregationInputObjectSchema, FoodOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FoodScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FoodScalarFieldEnumSchema), _count: z.union([ z.literal(true), FoodCountAggregateInputObjectSchema ]).optional(), _min: FoodMinAggregateInputObjectSchema.optional(), _max: FoodMaxAggregateInputObjectSchema.optional() }).strict();