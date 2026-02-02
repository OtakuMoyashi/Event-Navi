import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './FoodWhereUniqueInput.schema';
import { FoodCreateWithoutStoreInputObjectSchema as FoodCreateWithoutStoreInputObjectSchema } from './FoodCreateWithoutStoreInput.schema';
import { FoodUncheckedCreateWithoutStoreInputObjectSchema as FoodUncheckedCreateWithoutStoreInputObjectSchema } from './FoodUncheckedCreateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FoodWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FoodCreateWithoutStoreInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutStoreInputObjectSchema)])
}).strict();
export const FoodCreateOrConnectWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodCreateOrConnectWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodCreateOrConnectWithoutStoreInput>;
export const FoodCreateOrConnectWithoutStoreInputObjectZodSchema = makeSchema();
