import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';

export const FoodFindUniqueSchema: z.ZodType<Prisma.FoodFindUniqueArgs> = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FoodFindUniqueArgs>;

export const FoodFindUniqueZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema }).strict();