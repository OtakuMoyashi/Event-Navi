import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodUpdateManyMutationInputObjectSchema as FoodUpdateManyMutationInputObjectSchema } from './objects/FoodUpdateManyMutationInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './objects/FoodWhereInput.schema';

export const FoodUpdateManyAndReturnSchema: z.ZodType<Prisma.FoodUpdateManyAndReturnArgs> = z.object({ select: FoodSelectObjectSchema.optional(), data: FoodUpdateManyMutationInputObjectSchema, where: FoodWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FoodUpdateManyAndReturnArgs>;

export const FoodUpdateManyAndReturnZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), data: FoodUpdateManyMutationInputObjectSchema, where: FoodWhereInputObjectSchema.optional() }).strict();