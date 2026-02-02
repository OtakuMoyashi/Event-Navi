import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema as ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema } from './ItemUncheckedCreateNestedOneWithoutFoodInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema).optional()
}).strict();
export const FoodUncheckedCreateWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodUncheckedCreateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUncheckedCreateWithoutStoreInput>;
export const FoodUncheckedCreateWithoutStoreInputObjectZodSchema = makeSchema();
