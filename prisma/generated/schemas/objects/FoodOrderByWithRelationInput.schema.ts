import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StoreOrderByWithRelationInputObjectSchema as StoreOrderByWithRelationInputObjectSchema } from './StoreOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema as ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  store: z.lazy(() => StoreOrderByWithRelationInputObjectSchema).optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FoodOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FoodOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodOrderByWithRelationInput>;
export const FoodOrderByWithRelationInputObjectZodSchema = makeSchema();
