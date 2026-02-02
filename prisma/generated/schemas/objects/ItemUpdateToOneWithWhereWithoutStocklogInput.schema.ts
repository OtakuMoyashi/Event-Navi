import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutStocklogInputObjectSchema as ItemUpdateWithoutStocklogInputObjectSchema } from './ItemUpdateWithoutStocklogInput.schema';
import { ItemUncheckedUpdateWithoutStocklogInputObjectSchema as ItemUncheckedUpdateWithoutStocklogInputObjectSchema } from './ItemUncheckedUpdateWithoutStocklogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutStocklogInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutStocklogInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutStocklogInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutStocklogInput>;
export const ItemUpdateToOneWithWhereWithoutStocklogInputObjectZodSchema = makeSchema();
