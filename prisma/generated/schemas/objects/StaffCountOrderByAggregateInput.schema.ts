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
export const StaffCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StaffCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCountOrderByAggregateInput>;
export const StaffCountOrderByAggregateInputObjectZodSchema = makeSchema();
