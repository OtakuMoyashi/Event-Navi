import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodCreateManyInputObjectSchema as FoodCreateManyInputObjectSchema } from './objects/FoodCreateManyInput.schema';

export const FoodCreateManyAndReturnSchema: z.ZodType<Prisma.FoodCreateManyAndReturnArgs> = z.object({ select: FoodSelectObjectSchema.optional(), data: z.union([ FoodCreateManyInputObjectSchema, z.array(FoodCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FoodCreateManyAndReturnArgs>;

export const FoodCreateManyAndReturnZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), data: z.union([ FoodCreateManyInputObjectSchema, z.array(FoodCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();