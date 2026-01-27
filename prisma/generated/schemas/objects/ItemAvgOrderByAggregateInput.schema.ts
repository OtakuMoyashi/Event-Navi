import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional()
}).strict();
export const ItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemAvgOrderByAggregateInput>;
export const ItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
