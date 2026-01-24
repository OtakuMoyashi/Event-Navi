import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoreOrderByWithRelationInputObjectSchema as StoreOrderByWithRelationInputObjectSchema } from './StoreOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supabaseUserId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  store: z.lazy(() => StoreOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StaffOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StaffOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffOrderByWithRelationInput>;
export const StaffOrderByWithRelationInputObjectZodSchema = makeSchema();
