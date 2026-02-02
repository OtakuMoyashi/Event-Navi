import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionOrderByWithRelationInputObjectSchema as AttractionOrderByWithRelationInputObjectSchema } from './objects/AttractionOrderByWithRelationInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './objects/AttractionWhereInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './objects/AttractionWhereUniqueInput.schema';
import { AttractionCountAggregateInputObjectSchema as AttractionCountAggregateInputObjectSchema } from './objects/AttractionCountAggregateInput.schema';

export const AttractionCountSchema: z.ZodType<Prisma.AttractionCountArgs> = z.object({ orderBy: z.union([AttractionOrderByWithRelationInputObjectSchema, AttractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttractionWhereInputObjectSchema.optional(), cursor: AttractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttractionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AttractionCountArgs>;

export const AttractionCountZodSchema = z.object({ orderBy: z.union([AttractionOrderByWithRelationInputObjectSchema, AttractionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttractionWhereInputObjectSchema.optional(), cursor: AttractionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttractionCountAggregateInputObjectSchema ]).optional() }).strict();