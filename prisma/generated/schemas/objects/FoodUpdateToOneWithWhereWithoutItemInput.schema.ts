import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema';
import { FoodUpdateWithoutItemInputObjectSchema as FoodUpdateWithoutItemInputObjectSchema } from './FoodUpdateWithoutItemInput.schema';
import { FoodUncheckedUpdateWithoutItemInputObjectSchema as FoodUncheckedUpdateWithoutItemInputObjectSchema } from './FoodUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FoodWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FoodUpdateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const FoodUpdateToOneWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.FoodUpdateToOneWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpdateToOneWithWhereWithoutItemInput>;
export const FoodUpdateToOneWithWhereWithoutItemInputObjectZodSchema = makeSchema();
