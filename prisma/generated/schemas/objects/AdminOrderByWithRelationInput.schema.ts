import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { StoreOrderByWithRelationInputObjectSchema as StoreOrderByWithRelationInputObjectSchema } from './StoreOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  supabaseUserId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: SortOrderSchema.optional(),
  eventId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  store: z.lazy(() => StoreOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AdminOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AdminOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminOrderByWithRelationInput>;
export const AdminOrderByWithRelationInputObjectZodSchema = makeSchema();
