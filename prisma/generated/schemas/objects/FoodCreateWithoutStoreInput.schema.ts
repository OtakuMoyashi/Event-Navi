import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemCreateNestedOneWithoutFoodInputObjectSchema as ItemCreateNestedOneWithoutFoodInputObjectSchema } from './ItemCreateNestedOneWithoutFoodInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutFoodInputObjectSchema).optional()
}).strict();
export const FoodCreateWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodCreateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodCreateWithoutStoreInput>;
export const FoodCreateWithoutStoreInputObjectZodSchema = makeSchema();
