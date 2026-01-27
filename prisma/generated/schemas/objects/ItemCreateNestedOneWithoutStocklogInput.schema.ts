import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemCreateWithoutStocklogInputObjectSchema as ItemCreateWithoutStocklogInputObjectSchema } from './ItemCreateWithoutStocklogInput.schema';
import { ItemUncheckedCreateWithoutStocklogInputObjectSchema as ItemUncheckedCreateWithoutStocklogInputObjectSchema } from './ItemUncheckedCreateWithoutStocklogInput.schema';
import { ItemCreateOrConnectWithoutStocklogInputObjectSchema as ItemCreateOrConnectWithoutStocklogInputObjectSchema } from './ItemCreateOrConnectWithoutStocklogInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutStocklogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutStocklogInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutStocklogInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutStocklogInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateNestedOneWithoutStocklogInput>;
export const ItemCreateNestedOneWithoutStocklogInputObjectZodSchema = makeSchema();
