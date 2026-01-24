import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';

export const FoodDeleteOneSchema: z.ZodType<Prisma.FoodDeleteArgs> = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FoodDeleteArgs>;

export const FoodDeleteOneZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema }).strict();