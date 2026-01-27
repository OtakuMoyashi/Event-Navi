import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemOrderByWithAggregationInputObjectSchema as ItemOrderByWithAggregationInputObjectSchema } from './objects/ItemOrderByWithAggregationInput.schema';
import { ItemScalarWhereWithAggregatesInputObjectSchema as ItemScalarWhereWithAggregatesInputObjectSchema } from './objects/ItemScalarWhereWithAggregatesInput.schema';
import { ItemScalarFieldEnumSchema } from './enums/ItemScalarFieldEnum.schema';
import { ItemCountAggregateInputObjectSchema as ItemCountAggregateInputObjectSchema } from './objects/ItemCountAggregateInput.schema';
import { ItemMinAggregateInputObjectSchema as ItemMinAggregateInputObjectSchema } from './objects/ItemMinAggregateInput.schema';
import { ItemMaxAggregateInputObjectSchema as ItemMaxAggregateInputObjectSchema } from './objects/ItemMaxAggregateInput.schema';
import { ItemAvgAggregateInputObjectSchema as ItemAvgAggregateInputObjectSchema } from './objects/ItemAvgAggregateInput.schema';
import { ItemSumAggregateInputObjectSchema as ItemSumAggregateInputObjectSchema } from './objects/ItemSumAggregateInput.schema';

export const ItemGroupBySchema: z.ZodType<Prisma.ItemGroupByArgs> = z.object({ where: ItemWhereInputObjectSchema.optional(), orderBy: z.union([ItemOrderByWithAggregationInputObjectSchema, ItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), ItemCountAggregateInputObjectSchema ]).optional(), _min: ItemMinAggregateInputObjectSchema.optional(), _max: ItemMaxAggregateInputObjectSchema.optional(), _avg: ItemAvgAggregateInputObjectSchema.optional(), _sum: ItemSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ItemGroupByArgs>;

export const ItemGroupByZodSchema = z.object({ where: ItemWhereInputObjectSchema.optional(), orderBy: z.union([ItemOrderByWithAggregationInputObjectSchema, ItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), ItemCountAggregateInputObjectSchema ]).optional(), _min: ItemMinAggregateInputObjectSchema.optional(), _max: ItemMaxAggregateInputObjectSchema.optional(), _avg: ItemAvgAggregateInputObjectSchema.optional(), _sum: ItemSumAggregateInputObjectSchema.optional() }).strict();