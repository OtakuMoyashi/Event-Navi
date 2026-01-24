import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FoodWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => FoodWhereInputObjectSchema).optional().nullable()
}).strict();
export const FoodNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.FoodNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FoodNullableScalarRelationFilter>;
export const FoodNullableScalarRelationFilterObjectZodSchema = makeSchema();
