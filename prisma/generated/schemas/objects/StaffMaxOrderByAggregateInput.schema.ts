import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supabaseUserId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StaffMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StaffMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffMaxOrderByAggregateInput>;
export const StaffMaxOrderByAggregateInputObjectZodSchema = makeSchema();
