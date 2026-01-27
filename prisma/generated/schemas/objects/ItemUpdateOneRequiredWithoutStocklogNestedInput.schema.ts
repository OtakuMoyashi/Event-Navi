import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemCreateWithoutStocklogInputObjectSchema as ItemCreateWithoutStocklogInputObjectSchema } from './ItemCreateWithoutStocklogInput.schema';
import { ItemUncheckedCreateWithoutStocklogInputObjectSchema as ItemUncheckedCreateWithoutStocklogInputObjectSchema } from './ItemUncheckedCreateWithoutStocklogInput.schema';
import { ItemCreateOrConnectWithoutStocklogInputObjectSchema as ItemCreateOrConnectWithoutStocklogInputObjectSchema } from './ItemCreateOrConnectWithoutStocklogInput.schema';
import { ItemUpsertWithoutStocklogInputObjectSchema as ItemUpsertWithoutStocklogInputObjectSchema } from './ItemUpsertWithoutStocklogInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutStocklogInputObjectSchema as ItemUpdateToOneWithWhereWithoutStocklogInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutStocklogInput.schema';
import { ItemUpdateWithoutStocklogInputObjectSchema as ItemUpdateWithoutStocklogInputObjectSchema } from './ItemUpdateWithoutStocklogInput.schema';
import { ItemUncheckedUpdateWithoutStocklogInputObjectSchema as ItemUncheckedUpdateWithoutStocklogInputObjectSchema } from './ItemUncheckedUpdateWithoutStocklogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutStocklogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutStocklogInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutStocklogInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutStocklogInputObjectSchema), z.lazy(() => ItemUpdateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutStocklogInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneRequiredWithoutStocklogNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutStocklogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneRequiredWithoutStocklogNestedInput>;
export const ItemUpdateOneRequiredWithoutStocklogNestedInputObjectZodSchema = makeSchema();
