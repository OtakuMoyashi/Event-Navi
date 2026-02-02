import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodUpdateManyMutationInputObjectSchema as FoodUpdateManyMutationInputObjectSchema } from './objects/FoodUpdateManyMutationInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';

export const FoodUpdateManySchema: z.ZodType<Prisma.FoodUpdateManyArgs> = z.object({ data: FoodUpdateManyMutationInputObjectSchema, where: FoodWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FoodUpdateManyArgs>;

export const FoodUpdateManyZodSchema = z.object({ data: FoodUpdateManyMutationInputObjectSchema, where: FoodWhereInputObjectSchema.optional() }).strict();