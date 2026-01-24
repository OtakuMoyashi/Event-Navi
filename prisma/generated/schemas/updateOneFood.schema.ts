import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodUpdateInputObjectSchema as FoodUpdateInputObjectSchema } from './objects/FoodUpdateInput.schema';
import { FoodUncheckedUpdateInputObjectSchema as FoodUncheckedUpdateInputObjectSchema } from './objects/FoodUncheckedUpdateInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';

export const FoodUpdateOneSchema: z.ZodType<Prisma.FoodUpdateArgs> = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), data: z.union([FoodUpdateInputObjectSchema, FoodUncheckedUpdateInputObjectSchema]), where: FoodWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FoodUpdateArgs>;

export const FoodUpdateOneZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), data: z.union([FoodUpdateInputObjectSchema, FoodUncheckedUpdateInputObjectSchema]), where: FoodWhereUniqueInputObjectSchema }).strict();