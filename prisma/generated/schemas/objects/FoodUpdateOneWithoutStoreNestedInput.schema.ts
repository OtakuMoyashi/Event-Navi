import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodCreateWithoutStoreInputObjectSchema as FoodCreateWithoutStoreInputObjectSchema } from './FoodCreateWithoutStoreInput.schema';
import { FoodUncheckedCreateWithoutStoreInputObjectSchema as FoodUncheckedCreateWithoutStoreInputObjectSchema } from './FoodUncheckedCreateWithoutStoreInput.schema';
import { FoodCreateOrConnectWithoutStoreInputObjectSchema as FoodCreateOrConnectWithoutStoreInputObjectSchema } from './FoodCreateOrConnectWithoutStoreInput.schema';
import { FoodUpsertWithoutStoreInputObjectSchema as FoodUpsertWithoutStoreInputObjectSchema } from './FoodUpsertWithoutStoreInput.schema';
import { FoodWhereInputObjectSchema as FoodWhereInputObjectSchema } from './FoodWhereInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './FoodWhereUniqueInput.schema';
import { FoodUpdateToOneWithWhereWithoutStoreInputObjectSchema as FoodUpdateToOneWithWhereWithoutStoreInputObjectSchema } from './FoodUpdateToOneWithWhereWithoutStoreInput.schema';
import { FoodUpdateWithoutStoreInputObjectSchema as FoodUpdateWithoutStoreInputObjectSchema } from './FoodUpdateWithoutStoreInput.schema';
import { FoodUncheckedUpdateWithoutStoreInputObjectSchema as FoodUncheckedUpdateWithoutStoreInputObjectSchema } from './FoodUncheckedUpdateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FoodCreateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutStoreInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FoodCreateOrConnectWithoutStoreInputObjectSchema).optional(),
  upsert: z.lazy(() => FoodUpsertWithoutStoreInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => FoodWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => FoodWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => FoodWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FoodUpdateToOneWithWhereWithoutStoreInputObjectSchema), z.lazy(() => FoodUpdateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedUpdateWithoutStoreInputObjectSchema)]).optional()
}).strict();
export const FoodUpdateOneWithoutStoreNestedInputObjectSchema: z.ZodType<Prisma.FoodUpdateOneWithoutStoreNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpdateOneWithoutStoreNestedInput>;
export const FoodUpdateOneWithoutStoreNestedInputObjectZodSchema = makeSchema();
