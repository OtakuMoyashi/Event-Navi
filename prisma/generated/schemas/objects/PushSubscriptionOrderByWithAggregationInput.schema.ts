import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PushSubscriptionCountOrderByAggregateInputObjectSchema as PushSubscriptionCountOrderByAggregateInputObjectSchema } from './PushSubscriptionCountOrderByAggregateInput.schema';
import { PushSubscriptionMaxOrderByAggregateInputObjectSchema as PushSubscriptionMaxOrderByAggregateInputObjectSchema } from './PushSubscriptionMaxOrderByAggregateInput.schema';
import { PushSubscriptionMinOrderByAggregateInputObjectSchema as PushSubscriptionMinOrderByAggregateInputObjectSchema } from './PushSubscriptionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  endpoint: SortOrderSchema.optional(),
  p256dh: SortOrderSchema.optional(),
  auth: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PushSubscriptionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PushSubscriptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PushSubscriptionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PushSubscriptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PushSubscriptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionOrderByWithAggregationInput>;
export const PushSubscriptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
