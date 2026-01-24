import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventCountOrderByAggregateInputObjectSchema as EventCountOrderByAggregateInputObjectSchema } from './EventCountOrderByAggregateInput.schema';
import { EventMaxOrderByAggregateInputObjectSchema as EventMaxOrderByAggregateInputObjectSchema } from './EventMaxOrderByAggregateInput.schema';
import { EventMinOrderByAggregateInputObjectSchema as EventMinOrderByAggregateInputObjectSchema } from './EventMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  finishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => EventCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EventMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithAggregationInput>;
export const EventOrderByWithAggregationInputObjectZodSchema = makeSchema();
