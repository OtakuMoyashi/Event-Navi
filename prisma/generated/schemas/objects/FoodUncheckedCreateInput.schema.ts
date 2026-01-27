import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema as ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema } from './ItemUncheckedCreateNestedOneWithoutFoodInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  storeId: z.string(),
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemUncheckedCreateNestedOneWithoutFoodInputObjectSchema).optional()
}).strict();
export const FoodUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FoodUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUncheckedCreateInput>;
export const FoodUncheckedCreateInputObjectZodSchema = makeSchema();
