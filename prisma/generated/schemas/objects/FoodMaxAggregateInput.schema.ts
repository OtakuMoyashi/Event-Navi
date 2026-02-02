import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  storeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const FoodMaxAggregateInputObjectSchema: z.ZodType<Prisma.FoodMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FoodMaxAggregateInputType>;
export const FoodMaxAggregateInputObjectZodSchema = makeSchema();
