import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoreOrderByRelationAggregateInputObjectSchema as StoreOrderByRelationAggregateInputObjectSchema } from './StoreOrderByRelationAggregateInput.schema';
import { AdminOrderByRelationAggregateInputObjectSchema as AdminOrderByRelationAggregateInputObjectSchema } from './AdminOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  stores: z.lazy(() => StoreOrderByRelationAggregateInputObjectSchema).optional(),
  admins: z.lazy(() => AdminOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithRelationInput>;
export const EventOrderByWithRelationInputObjectZodSchema = makeSchema();
