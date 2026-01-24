import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  endpoint: SortOrderSchema.optional(),
  p256dh: SortOrderSchema.optional(),
  auth: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PushSubscriptionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PushSubscriptionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionMaxOrderByAggregateInput>;
export const PushSubscriptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
