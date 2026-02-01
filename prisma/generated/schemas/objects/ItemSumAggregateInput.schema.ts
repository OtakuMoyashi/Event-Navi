import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  stock: z.literal(true).optional(),
  price: z.literal(true).optional()
}).strict();
export const ItemSumAggregateInputObjectSchema: z.ZodType<Prisma.ItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ItemSumAggregateInputType>;
export const ItemSumAggregateInputObjectZodSchema = makeSchema();
