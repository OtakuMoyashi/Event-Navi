import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AttractionOrderByWithRelationInputObjectSchema as AttractionOrderByWithRelationInputObjectSchema } from './AttractionOrderByWithRelationInput.schema';
import { FoodOrderByWithRelationInputObjectSchema as FoodOrderByWithRelationInputObjectSchema } from './FoodOrderByWithRelationInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { AdminOrderByRelationAggregateInputObjectSchema as AdminOrderByRelationAggregateInputObjectSchema } from './AdminOrderByRelationAggregateInput.schema';
import { StaffOrderByRelationAggregateInputObjectSchema as StaffOrderByRelationAggregateInputObjectSchema } from './StaffOrderByRelationAggregateInput.schema'

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
  attraction: z.lazy(() => AttractionOrderByWithRelationInputObjectSchema).optional(),
  food: z.lazy(() => FoodOrderByWithRelationInputObjectSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  admins: z.lazy(() => AdminOrderByRelationAggregateInputObjectSchema).optional(),
  staffs: z.lazy(() => StaffOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StoreOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StoreOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreOrderByWithRelationInput>;
export const StoreOrderByWithRelationInputObjectZodSchema = makeSchema();
