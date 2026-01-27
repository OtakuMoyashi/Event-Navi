import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional()
}).strict();
export const ItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemSumOrderByAggregateInput>;
export const ItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
