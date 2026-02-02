import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogArgsObjectSchema as StockLogArgsObjectSchema } from './StockLogArgs.schema';
import { FoodArgsObjectSchema as FoodArgsObjectSchema } from './FoodArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  stock: z.boolean().optional(),
  stocklog: z.union([z.boolean(), z.lazy(() => StockLogArgsObjectSchema)]).optional(),
  foodId: z.boolean().optional(),
  food: z.union([z.boolean(), z.lazy(() => FoodArgsObjectSchema)]).optional(),
  price: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ItemSelectObjectSchema: z.ZodType<Prisma.ItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.ItemSelect>;
export const ItemSelectObjectZodSchema = makeSchema();
