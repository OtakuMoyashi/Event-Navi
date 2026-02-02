import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StockLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StockLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogOrderByWithRelationInput>;
export const StockLogOrderByWithRelationInputObjectZodSchema = makeSchema();
