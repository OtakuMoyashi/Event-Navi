import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogCreateNestedOneWithoutItemInputObjectSchema as StockLogCreateNestedOneWithoutItemInputObjectSchema } from './StockLogCreateNestedOneWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  stock: z.number().int(),
  price: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stocklog: z.lazy(() => StockLogCreateNestedOneWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemCreateWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemCreateWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateWithoutFoodInput>;
export const ItemCreateWithoutFoodInputObjectZodSchema = makeSchema();
