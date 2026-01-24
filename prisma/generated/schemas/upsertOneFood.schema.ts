import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';
import { FoodCreateInputObjectSchema as FoodCreateInputObjectSchema } from './objects/FoodCreateInput.schema';
import { FoodUncheckedCreateInputObjectSchema as FoodUncheckedCreateInputObjectSchema } from './objects/FoodUncheckedCreateInput.schema';
import { FoodUpdateInputObjectSchema as FoodUpdateInputObjectSchema } from './objects/FoodUpdateInput.schema';
import { FoodUncheckedUpdateInputObjectSchema as FoodUncheckedUpdateInputObjectSchema } from './objects/FoodUncheckedUpdateInput.schema';

export const FoodUpsertOneSchema: z.ZodType<Prisma.FoodUpsertArgs> = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema, create: z.union([ FoodCreateInputObjectSchema, FoodUncheckedCreateInputObjectSchema ]), update: z.union([ FoodUpdateInputObjectSchema, FoodUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FoodUpsertArgs>;

export const FoodUpsertOneZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema, create: z.union([ FoodCreateInputObjectSchema, FoodUncheckedCreateInputObjectSchema ]), update: z.union([ FoodUpdateInputObjectSchema, FoodUncheckedUpdateInputObjectSchema ]) }).strict();