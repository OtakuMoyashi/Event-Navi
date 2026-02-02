import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogUncheckedCreateNestedOneWithoutItemInputObjectSchema as StockLogUncheckedCreateNestedOneWithoutItemInputObjectSchema } from './StockLogUncheckedCreateNestedOneWithoutItemInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  stock: z.number().int(),
  foodId: z.string(),
  price: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  stocklog: z.lazy(() => StockLogUncheckedCreateNestedOneWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedCreateInput>;
export const ItemUncheckedCreateInputObjectZodSchema = makeSchema();
