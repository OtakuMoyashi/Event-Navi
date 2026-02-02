import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutFoodInputObjectSchema as ItemCreateWithoutFoodInputObjectSchema } from './ItemCreateWithoutFoodInput.schema';
import { ItemUncheckedCreateWithoutFoodInputObjectSchema as ItemUncheckedCreateWithoutFoodInputObjectSchema } from './ItemUncheckedCreateWithoutFoodInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutFoodInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateOrConnectWithoutFoodInput>;
export const ItemCreateOrConnectWithoutFoodInputObjectZodSchema = makeSchema();
