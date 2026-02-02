import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema';
import { FoodUpdateWithoutStoreInputObjectSchema as FoodUpdateWithoutStoreInputObjectSchema } from './FoodUpdateWithoutStoreInput.schema';
import { FoodUncheckedUpdateWithoutStoreInputObjectSchema as FoodUncheckedUpdateWithoutStoreInputObjectSchema } from './FoodUncheckedUpdateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FoodWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FoodUpdateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedUpdateWithoutStoreInputObjectSchema)])
}).strict();
export const FoodUpdateToOneWithWhereWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodUpdateToOneWithWhereWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpdateToOneWithWhereWithoutStoreInput>;
export const FoodUpdateToOneWithWhereWithoutStoreInputObjectZodSchema = makeSchema();
