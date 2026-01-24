import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './objects/FoodWhereUniqueInput.schema';

export const FoodFindUniqueOrThrowSchema: z.ZodType<Prisma.FoodFindUniqueOrThrowArgs> = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FoodFindUniqueOrThrowArgs>;

export const FoodFindUniqueOrThrowZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), where: FoodWhereUniqueInputObjectSchema }).strict();