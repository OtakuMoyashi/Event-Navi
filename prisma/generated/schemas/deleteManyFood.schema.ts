import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';

export const FoodDeleteManySchema: z.ZodType<Prisma.FoodDeleteManyArgs> = z.object({ where: FoodWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FoodDeleteManyArgs>;

export const FoodDeleteManyZodSchema = z.object({ where: FoodWhereInputObjectSchema.optional() }).strict();