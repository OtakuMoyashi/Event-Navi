import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FoodCountOrderByAggregateInputObjectSchema as FoodCountOrderByAggregateInputObjectSchema } from './FoodCountOrderByAggregateInput.schema';
import { FoodMaxOrderByAggregateInputObjectSchema as FoodMaxOrderByAggregateInputObjectSchema } from './FoodMaxOrderByAggregateInput.schema';
import { FoodMinOrderByAggregateInputObjectSchema as FoodMinOrderByAggregateInputObjectSchema } from './FoodMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FoodCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FoodMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FoodMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FoodOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FoodOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodOrderByWithAggregationInput>;
export const FoodOrderByWithAggregationInputObjectZodSchema = makeSchema();
