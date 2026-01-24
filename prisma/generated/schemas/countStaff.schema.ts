import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffOrderByWithRelationInputObjectSchema as StaffOrderByWithRelationInputObjectSchema } from './objects/StaffOrderByWithRelationInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';
import { StaffCountAggregateInputObjectSchema as StaffCountAggregateInputObjectSchema } from './objects/StaffCountAggregateInput.schema';

export const StaffCountSchema: z.ZodType<Prisma.StaffCountArgs> = z.object({ orderBy: z.union([StaffOrderByWithRelationInputObjectSchema, StaffOrderByWithRelationInputObjectSchema.array()]).optional(), where: StaffWhereInputObjectSchema.optional(), cursor: StaffWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StaffCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StaffCountArgs>;

export const StaffCountZodSchema = z.object({ orderBy: z.union([StaffOrderByWithRelationInputObjectSchema, StaffOrderByWithRelationInputObjectSchema.array()]).optional(), where: StaffWhereInputObjectSchema.optional(), cursor: StaffWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StaffCountAggregateInputObjectSchema ]).optional() }).strict();