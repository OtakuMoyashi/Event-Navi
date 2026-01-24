import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AttractionCountOrderByAggregateInputObjectSchema as AttractionCountOrderByAggregateInputObjectSchema } from './AttractionCountOrderByAggregateInput.schema';
import { AttractionMaxOrderByAggregateInputObjectSchema as AttractionMaxOrderByAggregateInputObjectSchema } from './AttractionMaxOrderByAggregateInput.schema';
import { AttractionMinOrderByAggregateInputObjectSchema as AttractionMinOrderByAggregateInputObjectSchema } from './AttractionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AttractionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AttractionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AttractionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AttractionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AttractionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionOrderByWithAggregationInput>;
export const AttractionOrderByWithAggregationInputObjectZodSchema = makeSchema();
