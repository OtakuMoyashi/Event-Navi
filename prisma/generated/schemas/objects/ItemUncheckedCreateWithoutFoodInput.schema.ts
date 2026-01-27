import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogUncheckedCreateNestedOneWithoutItemInputObjectSchema as StockLogUncheckedCreateNestedOneWithoutItemInputObjectSchema } from './StockLogUncheckedCreateNestedOneWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number().int().optional().nullable(),
  stock: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stocklog: z.lazy(() => StockLogUncheckedCreateNestedOneWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemUncheckedCreateWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedCreateWithoutFoodInput>;
export const ItemUncheckedCreateWithoutFoodInputObjectZodSchema = makeSchema();
