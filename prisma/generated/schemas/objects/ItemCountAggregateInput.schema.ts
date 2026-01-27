import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  price: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  foodId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ItemCountAggregateInputObjectSchema: z.ZodType<Prisma.ItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ItemCountAggregateInputType>;
export const ItemCountAggregateInputObjectZodSchema = makeSchema();
