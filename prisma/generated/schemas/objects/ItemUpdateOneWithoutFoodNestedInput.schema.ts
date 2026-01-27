import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemCreateWithoutFoodInputObjectSchema as ItemCreateWithoutFoodInputObjectSchema } from './ItemCreateWithoutFoodInput.schema';
import { ItemUncheckedCreateWithoutFoodInputObjectSchema as ItemUncheckedCreateWithoutFoodInputObjectSchema } from './ItemUncheckedCreateWithoutFoodInput.schema';
import { ItemCreateOrConnectWithoutFoodInputObjectSchema as ItemCreateOrConnectWithoutFoodInputObjectSchema } from './ItemCreateOrConnectWithoutFoodInput.schema';
import { ItemUpsertWithoutFoodInputObjectSchema as ItemUpsertWithoutFoodInputObjectSchema } from './ItemUpsertWithoutFoodInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutFoodInputObjectSchema as ItemUpdateToOneWithWhereWithoutFoodInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutFoodInput.schema';
import { ItemUpdateWithoutFoodInputObjectSchema as ItemUpdateWithoutFoodInputObjectSchema } from './ItemUpdateWithoutFoodInput.schema';
import { ItemUncheckedUpdateWithoutFoodInputObjectSchema as ItemUncheckedUpdateWithoutFoodInputObjectSchema } from './ItemUncheckedUpdateWithoutFoodInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutFoodInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutFoodInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutFoodInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ItemWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutFoodInputObjectSchema), z.lazy(() => ItemUpdateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutFoodInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneWithoutFoodNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneWithoutFoodNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateOneWithoutFoodNestedInput>;
export const ItemUpdateOneWithoutFoodNestedInputObjectZodSchema = makeSchema();
