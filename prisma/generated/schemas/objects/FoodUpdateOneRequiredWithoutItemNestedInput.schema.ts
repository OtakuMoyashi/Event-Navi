import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodCreateWithoutItemInputObjectSchema as FoodCreateWithoutItemInputObjectSchema } from './FoodCreateWithoutItemInput.schema';
import { FoodUncheckedCreateWithoutItemInputObjectSchema as FoodUncheckedCreateWithoutItemInputObjectSchema } from './FoodUncheckedCreateWithoutItemInput.schema';
import { FoodCreateOrConnectWithoutItemInputObjectSchema as FoodCreateOrConnectWithoutItemInputObjectSchema } from './FoodCreateOrConnectWithoutItemInput.schema';
import { FoodUpsertWithoutItemInputObjectSchema as FoodUpsertWithoutItemInputObjectSchema } from './FoodUpsertWithoutItemInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './FoodWhereUniqueInput.schema';
import { FoodUpdateToOneWithWhereWithoutItemInputObjectSchema as FoodUpdateToOneWithWhereWithoutItemInputObjectSchema } from './FoodUpdateToOneWithWhereWithoutItemInput.schema';
import { FoodUpdateWithoutItemInputObjectSchema as FoodUpdateWithoutItemInputObjectSchema } from './FoodUpdateWithoutItemInput.schema';
import { FoodUncheckedUpdateWithoutItemInputObjectSchema as FoodUncheckedUpdateWithoutItemInputObjectSchema } from './FoodUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FoodCreateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FoodCreateOrConnectWithoutItemInputObjectSchema).optional(),
  upsert: z.lazy(() => FoodUpsertWithoutItemInputObjectSchema).optional(),
  connect: z.lazy(() => FoodWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FoodUpdateToOneWithWhereWithoutItemInputObjectSchema), z.lazy(() => FoodUpdateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedUpdateWithoutItemInputObjectSchema)]).optional()
}).strict();
export const FoodUpdateOneRequiredWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.FoodUpdateOneRequiredWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpdateOneRequiredWithoutItemNestedInput>;
export const FoodUpdateOneRequiredWithoutItemNestedInputObjectZodSchema = makeSchema();
