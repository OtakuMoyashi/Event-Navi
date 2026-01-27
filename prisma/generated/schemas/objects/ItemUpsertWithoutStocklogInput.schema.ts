import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemUpdateWithoutStocklogInputObjectSchema as ItemUpdateWithoutStocklogInputObjectSchema } from './ItemUpdateWithoutStocklogInput.schema';
import { ItemUncheckedUpdateWithoutStocklogInputObjectSchema as ItemUncheckedUpdateWithoutStocklogInputObjectSchema } from './ItemUncheckedUpdateWithoutStocklogInput.schema';
import { ItemCreateWithoutStocklogInputObjectSchema as ItemCreateWithoutStocklogInputObjectSchema } from './ItemCreateWithoutStocklogInput.schema';
import { ItemUncheckedCreateWithoutStocklogInputObjectSchema as ItemUncheckedCreateWithoutStocklogInputObjectSchema } from './ItemUncheckedCreateWithoutStocklogInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutStocklogInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutStocklogInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutStocklogInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutStocklogInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutStocklogInput>;
export const ItemUpsertWithoutStocklogInputObjectZodSchema = makeSchema();
