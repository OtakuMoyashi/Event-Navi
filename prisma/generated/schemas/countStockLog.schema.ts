import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogOrderByWithRelationInputObjectSchema as StockLogOrderByWithRelationInputObjectSchema } from './objects/StockLogOrderByWithRelationInput.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './objects/StockLogWhereInput.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './objects/StockLogWhereUniqueInput.schema';
import { StockLogCountAggregateInputObjectSchema as StockLogCountAggregateInputObjectSchema } from './objects/StockLogCountAggregateInput.schema';

export const StockLogCountSchema: z.ZodType<Prisma.StockLogCountArgs> = z.object({ orderBy: z.union([StockLogOrderByWithRelationInputObjectSchema, StockLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: StockLogWhereInputObjectSchema.optional(), cursor: StockLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StockLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StockLogCountArgs>;

export const StockLogCountZodSchema = z.object({ orderBy: z.union([StockLogOrderByWithRelationInputObjectSchema, StockLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: StockLogWhereInputObjectSchema.optional(), cursor: StockLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StockLogCountAggregateInputObjectSchema ]).optional() }).strict();