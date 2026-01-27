import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './objects/ItemOrderByWithRelationInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemCountAggregateInputObjectSchema as ItemCountAggregateInputObjectSchema } from './objects/ItemCountAggregateInput.schema';

export const ItemCountSchema: z.ZodType<Prisma.ItemCountArgs> = z.object({ orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ItemCountArgs>;

export const ItemCountZodSchema = z.object({ orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ItemCountAggregateInputObjectSchema ]).optional() }).strict();