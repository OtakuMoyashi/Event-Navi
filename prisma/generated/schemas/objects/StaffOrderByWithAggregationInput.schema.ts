import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StaffCountOrderByAggregateInputObjectSchema as StaffCountOrderByAggregateInputObjectSchema } from './StaffCountOrderByAggregateInput.schema';
import { StaffMaxOrderByAggregateInputObjectSchema as StaffMaxOrderByAggregateInputObjectSchema } from './StaffMaxOrderByAggregateInput.schema';
import { StaffMinOrderByAggregateInputObjectSchema as StaffMinOrderByAggregateInputObjectSchema } from './StaffMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supabaseUserId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StaffCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StaffMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StaffMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StaffOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StaffOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffOrderByWithAggregationInput>;
export const StaffOrderByWithAggregationInputObjectZodSchema = makeSchema();
