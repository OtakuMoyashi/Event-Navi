import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodCreateManyInputObjectSchema as FoodCreateManyInputObjectSchema } from './objects/FoodCreateManyInput.schema';

export const FoodCreateManySchema: z.ZodType<Prisma.FoodCreateManyArgs> = z.object({ data: z.union([ FoodCreateManyInputObjectSchema, z.array(FoodCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FoodCreateManyArgs>;

export const FoodCreateManyZodSchema = z.object({ data: z.union([ FoodCreateManyInputObjectSchema, z.array(FoodCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();