import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemUpdateWithoutFoodInputObjectSchema as ItemUpdateWithoutFoodInputObjectSchema } from './ItemUpdateWithoutFoodInput.schema';
import { ItemUncheckedUpdateWithoutFoodInputObjectSchema as ItemUncheckedUpdateWithoutFoodInputObjectSchema } from './ItemUncheckedUpdateWithoutFoodInput.schema';
import { ItemCreateWithoutFoodInputObjectSchema as ItemCreateWithoutFoodInputObjectSchema } from './ItemCreateWithoutFoodInput.schema';
import { ItemUncheckedCreateWithoutFoodInputObjectSchema as ItemUncheckedCreateWithoutFoodInputObjectSchema } from './ItemUncheckedCreateWithoutFoodInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutFoodInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutFoodInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpsertWithoutFoodInput>;
export const ItemUpsertWithoutFoodInputObjectZodSchema = makeSchema();
