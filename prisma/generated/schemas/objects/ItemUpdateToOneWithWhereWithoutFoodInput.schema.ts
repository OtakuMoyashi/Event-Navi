import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutFoodInputObjectSchema as ItemUpdateWithoutFoodInputObjectSchema } from './ItemUpdateWithoutFoodInput.schema';
import { ItemUncheckedUpdateWithoutFoodInputObjectSchema as ItemUncheckedUpdateWithoutFoodInputObjectSchema } from './ItemUncheckedUpdateWithoutFoodInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutFoodInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutFoodInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutFoodInput>;
export const ItemUpdateToOneWithWhereWithoutFoodInputObjectZodSchema = makeSchema();
