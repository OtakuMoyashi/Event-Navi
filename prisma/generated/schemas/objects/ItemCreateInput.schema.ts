import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogCreateNestedOneWithoutItemInputObjectSchema as StockLogCreateNestedOneWithoutItemInputObjectSchema } from './StockLogCreateNestedOneWithoutItemInput.schema';
import { FoodCreateNestedOneWithoutItemInputObjectSchema as FoodCreateNestedOneWithoutItemInputObjectSchema } from './FoodCreateNestedOneWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number().int().optional().nullable(),
  stock: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  stocklog: z.lazy(() => StockLogCreateNestedOneWithoutItemInputObjectSchema).optional(),
  food: z.lazy(() => FoodCreateNestedOneWithoutItemInputObjectSchema)
}).strict();
export const ItemCreateInputObjectSchema: z.ZodType<Prisma.ItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateInput>;
export const ItemCreateInputObjectZodSchema = makeSchema();
