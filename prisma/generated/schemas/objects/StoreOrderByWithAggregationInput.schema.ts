import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoreCountOrderByAggregateInputObjectSchema as StoreCountOrderByAggregateInputObjectSchema } from './StoreCountOrderByAggregateInput.schema';
import { StoreMaxOrderByAggregateInputObjectSchema as StoreMaxOrderByAggregateInputObjectSchema } from './StoreMaxOrderByAggregateInput.schema';
import { StoreMinOrderByAggregateInputObjectSchema as StoreMinOrderByAggregateInputObjectSchema } from './StoreMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  finishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storeType: SortOrderSchema.optional(),
  eventId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StoreCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StoreMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StoreMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StoreOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StoreOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreOrderByWithAggregationInput>;
export const StoreOrderByWithAggregationInputObjectZodSchema = makeSchema();
