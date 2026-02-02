import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutStocklogInputObjectSchema as ItemCreateWithoutStocklogInputObjectSchema } from './ItemCreateWithoutStocklogInput.schema';
import { ItemUncheckedCreateWithoutStocklogInputObjectSchema as ItemUncheckedCreateWithoutStocklogInputObjectSchema } from './ItemUncheckedCreateWithoutStocklogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutStocklogInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutStocklogInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutStocklogInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutStocklogInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutStocklogInput>;
export const ItemCreateOrConnectWithoutStocklogInputObjectZodSchema = makeSchema();
