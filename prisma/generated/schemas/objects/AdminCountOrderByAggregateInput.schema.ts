import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supabaseUserId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AdminCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AdminCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCountOrderByAggregateInput>;
export const AdminCountOrderByAggregateInputObjectZodSchema = makeSchema();
