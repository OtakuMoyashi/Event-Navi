import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodCreateWithoutStoreInputObjectSchema as FoodCreateWithoutStoreInputObjectSchema } from './FoodCreateWithoutStoreInput.schema';
import { FoodUncheckedCreateWithoutStoreInputObjectSchema as FoodUncheckedCreateWithoutStoreInputObjectSchema } from './FoodUncheckedCreateWithoutStoreInput.schema';
import { FoodCreateOrConnectWithoutStoreInputObjectSchema as FoodCreateOrConnectWithoutStoreInputObjectSchema } from './FoodCreateOrConnectWithoutStoreInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './FoodWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FoodCreateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutStoreInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FoodCreateOrConnectWithoutStoreInputObjectSchema).optional(),
  connect: z.lazy(() => FoodWhereUniqueInputObjectSchema).optional()
}).strict();
export const FoodUncheckedCreateNestedOneWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodUncheckedCreateNestedOneWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUncheckedCreateNestedOneWithoutStoreInput>;
export const FoodUncheckedCreateNestedOneWithoutStoreInputObjectZodSchema = makeSchema();
