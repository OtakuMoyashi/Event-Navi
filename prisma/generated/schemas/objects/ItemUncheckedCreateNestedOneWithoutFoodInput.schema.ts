import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemCreateWithoutFoodInputObjectSchema as ItemCreateWithoutFoodInputObjectSchema } from './ItemCreateWithoutFoodInput.schema';
import { ItemUncheckedCreateWithoutFoodInputObjectSchema as ItemUncheckedCreateWithoutFoodInputObjectSchema } from './ItemUncheckedCreateWithoutFoodInput.schema';
import { ItemCreateOrConnectWithoutFoodInputObjectSchema as ItemCreateOrConnectWithoutFoodInputObjectSchema } from './ItemCreateOrConnectWithoutFoodInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutFoodInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutFoodInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateNestedOneWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedCreateNestedOneWithoutFoodInput>;
export const ItemUncheckedCreateNestedOneWithoutFoodInputObjectZodSchema = makeSchema();
