import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  foodId: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemMinOrderByAggregateInput>;
export const ItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
