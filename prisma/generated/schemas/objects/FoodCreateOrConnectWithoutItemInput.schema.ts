import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './FoodWhereUniqueInput.schema';
import { FoodCreateWithoutItemInputObjectSchema as FoodCreateWithoutItemInputObjectSchema } from './FoodCreateWithoutItemInput.schema';
import { FoodUncheckedCreateWithoutItemInputObjectSchema as FoodUncheckedCreateWithoutItemInputObjectSchema } from './FoodUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FoodWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FoodCreateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const FoodCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.FoodCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodCreateOrConnectWithoutItemInput>;
export const FoodCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
