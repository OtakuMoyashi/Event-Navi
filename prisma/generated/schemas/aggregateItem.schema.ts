import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './objects/ItemOrderByWithRelationInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemCountAggregateInputObjectSchema as ItemCountAggregateInputObjectSchema } from './objects/ItemCountAggregateInput.schema';
import { ItemMinAggregateInputObjectSchema as ItemMinAggregateInputObjectSchema } from './objects/ItemMinAggregateInput.schema';
import { ItemMaxAggregateInputObjectSchema as ItemMaxAggregateInputObjectSchema } from './objects/ItemMaxAggregateInput.schema';
import { ItemAvgAggregateInputObjectSchema as ItemAvgAggregateInputObjectSchema } from './objects/ItemAvgAggregateInput.schema';
import { ItemSumAggregateInputObjectSchema as ItemSumAggregateInputObjectSchema } from './objects/ItemSumAggregateInput.schema';

export const ItemAggregateSchema: z.ZodType<Prisma.ItemAggregateArgs> = z.object({ orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ItemCountAggregateInputObjectSchema ]).optional(), _min: ItemMinAggregateInputObjectSchema.optional(), _max: ItemMaxAggregateInputObjectSchema.optional(), _avg: ItemAvgAggregateInputObjectSchema.optional(), _sum: ItemSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ItemAggregateArgs>;

export const ItemAggregateZodSchema = z.object({ orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ItemCountAggregateInputObjectSchema ]).optional(), _min: ItemMinAggregateInputObjectSchema.optional(), _max: ItemMaxAggregateInputObjectSchema.optional(), _avg: ItemAvgAggregateInputObjectSchema.optional(), _sum: ItemSumAggregateInputObjectSchema.optional() }).strict();