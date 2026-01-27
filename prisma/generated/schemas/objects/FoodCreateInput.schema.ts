import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateNestedOneWithoutFoodInputObjectSchema as StoreCreateNestedOneWithoutFoodInputObjectSchema } from './StoreCreateNestedOneWithoutFoodInput.schema';
import { ItemCreateNestedOneWithoutFoodInputObjectSchema as ItemCreateNestedOneWithoutFoodInputObjectSchema } from './ItemCreateNestedOneWithoutFoodInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  store: z.lazy(() => StoreCreateNestedOneWithoutFoodInputObjectSchema),
  item: z.lazy(() => ItemCreateNestedOneWithoutFoodInputObjectSchema).optional()
}).strict();
export const FoodCreateInputObjectSchema: z.ZodType<Prisma.FoodCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodCreateInput>;
export const FoodCreateInputObjectZodSchema = makeSchema();
