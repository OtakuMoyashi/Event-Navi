import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AttractionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AttractionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCountOrderByAggregateInput>;
export const AttractionCountOrderByAggregateInputObjectZodSchema = makeSchema();
