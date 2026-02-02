import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodUpdateWithoutItemInputObjectSchema as FoodUpdateWithoutItemInputObjectSchema } from './FoodUpdateWithoutItemInput.schema';
import { FoodUncheckedUpdateWithoutItemInputObjectSchema as FoodUncheckedUpdateWithoutItemInputObjectSchema } from './FoodUncheckedUpdateWithoutItemInput.schema';
import { FoodCreateWithoutItemInputObjectSchema as FoodCreateWithoutItemInputObjectSchema } from './FoodCreateWithoutItemInput.schema';
import { FoodUncheckedCreateWithoutItemInputObjectSchema as FoodUncheckedCreateWithoutItemInputObjectSchema } from './FoodUncheckedCreateWithoutItemInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FoodUpdateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => FoodCreateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutItemInputObjectSchema)]),
  where: z.lazy(() => FoodWhereInputObjectSchema).optional()
}).strict();
export const FoodUpsertWithoutItemInputObjectSchema: z.ZodType<Prisma.FoodUpsertWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpsertWithoutItemInput>;
export const FoodUpsertWithoutItemInputObjectZodSchema = makeSchema();
