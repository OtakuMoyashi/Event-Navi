import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  foodId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCountOrderByAggregateInput>;
export const ItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
