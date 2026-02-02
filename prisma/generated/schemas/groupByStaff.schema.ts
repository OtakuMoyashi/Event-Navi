import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';
import { StaffOrderByWithAggregationInputObjectSchema as StaffOrderByWithAggregationInputObjectSchema } from './objects/StaffOrderByWithAggregationInput.schema';
import { StaffScalarWhereWithAggregatesInputObjectSchema as StaffScalarWhereWithAggregatesInputObjectSchema } from './objects/StaffScalarWhereWithAggregatesInput.schema';
import { StaffScalarFieldEnumSchema } from './enums/StaffScalarFieldEnum.schema';
import { StaffCountAggregateInputObjectSchema as StaffCountAggregateInputObjectSchema } from './objects/StaffCountAggregateInput.schema';
import { StaffMinAggregateInputObjectSchema as StaffMinAggregateInputObjectSchema } from './objects/StaffMinAggregateInput.schema';
import { StaffMaxAggregateInputObjectSchema as StaffMaxAggregateInputObjectSchema } from './objects/StaffMaxAggregateInput.schema';

export const StaffGroupBySchema: z.ZodType<Prisma.StaffGroupByArgs> = z.object({ where: StaffWhereInputObjectSchema.optional(), orderBy: z.union([StaffOrderByWithAggregationInputObjectSchema, StaffOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StaffScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StaffScalarFieldEnumSchema), _count: z.union([ z.literal(true), StaffCountAggregateInputObjectSchema ]).optional(), _min: StaffMinAggregateInputObjectSchema.optional(), _max: StaffMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StaffGroupByArgs>;

export const StaffGroupByZodSchema = z.object({ where: StaffWhereInputObjectSchema.optional(), orderBy: z.union([StaffOrderByWithAggregationInputObjectSchema, StaffOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StaffScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StaffScalarFieldEnumSchema), _count: z.union([ z.literal(true), StaffCountAggregateInputObjectSchema ]).optional(), _min: StaffMinAggregateInputObjectSchema.optional(), _max: StaffMaxAggregateInputObjectSchema.optional() }).strict();