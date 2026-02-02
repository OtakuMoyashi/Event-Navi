import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodUpdateWithoutStoreInputObjectSchema as FoodUpdateWithoutStoreInputObjectSchema } from './FoodUpdateWithoutStoreInput.schema';
import { FoodUncheckedUpdateWithoutStoreInputObjectSchema as FoodUncheckedUpdateWithoutStoreInputObjectSchema } from './FoodUncheckedUpdateWithoutStoreInput.schema';
import { FoodCreateWithoutStoreInputObjectSchema as FoodCreateWithoutStoreInputObjectSchema } from './FoodCreateWithoutStoreInput.schema';
import { FoodUncheckedCreateWithoutStoreInputObjectSchema as FoodUncheckedCreateWithoutStoreInputObjectSchema } from './FoodUncheckedCreateWithoutStoreInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FoodUpdateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedUpdateWithoutStoreInputObjectSchema)]),
  create: z.union([z.lazy(() => FoodCreateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutStoreInputObjectSchema)]),
  where: z.lazy(() => FoodWhereInputObjectSchema).optional()
}).strict();
export const FoodUpsertWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodUpsertWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpsertWithoutStoreInput>;
export const FoodUpsertWithoutStoreInputObjectZodSchema = makeSchema();
