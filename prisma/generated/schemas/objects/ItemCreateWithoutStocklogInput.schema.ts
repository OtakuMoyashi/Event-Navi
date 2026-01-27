import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodCreateNestedOneWithoutItemInputObjectSchema as FoodCreateNestedOneWithoutItemInputObjectSchema } from './FoodCreateNestedOneWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number().int().optional().nullable(),
  stock: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  food: z.lazy(() => FoodCreateNestedOneWithoutItemInputObjectSchema)
}).strict();
export const ItemCreateWithoutStocklogInputObjectSchema: z.ZodType<Prisma.ItemCreateWithoutStocklogInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateWithoutStocklogInput>;
export const ItemCreateWithoutStocklogInputObjectZodSchema = makeSchema();
