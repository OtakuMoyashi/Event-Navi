import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StockLogOrderByWithRelationInputObjectSchema as StockLogOrderByWithRelationInputObjectSchema } from './StockLogOrderByWithRelationInput.schema';
import { FoodOrderByWithRelationInputObjectSchema as FoodOrderByWithRelationInputObjectSchema } from './FoodOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stock: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  foodId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  stocklog: z.lazy(() => StockLogOrderByWithRelationInputObjectSchema).optional(),
  food: z.lazy(() => FoodOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemOrderByWithRelationInput>;
export const ItemOrderByWithRelationInputObjectZodSchema = makeSchema();
