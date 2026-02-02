import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FoodWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => FoodWhereInputObjectSchema).optional()
}).strict();
export const FoodScalarRelationFilterObjectSchema: z.ZodType<Prisma.FoodScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FoodScalarRelationFilter>;
export const FoodScalarRelationFilterObjectZodSchema = makeSchema();
