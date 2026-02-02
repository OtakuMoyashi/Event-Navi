import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodCreateWithoutItemInputObjectSchema as FoodCreateWithoutItemInputObjectSchema } from './FoodCreateWithoutItemInput.schema';
import { FoodUncheckedCreateWithoutItemInputObjectSchema as FoodUncheckedCreateWithoutItemInputObjectSchema } from './FoodUncheckedCreateWithoutItemInput.schema';
import { FoodCreateOrConnectWithoutItemInputObjectSchema as FoodCreateOrConnectWithoutItemInputObjectSchema } from './FoodCreateOrConnectWithoutItemInput.schema';
import { FoodWhereUniqueInputObjectSchema as FoodWhereUniqueInputObjectSchema } from './FoodWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FoodCreateWithoutItemInputObjectSchema), z.lazy(() => FoodUncheckedCreateWithoutItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FoodCreateOrConnectWithoutItemInputObjectSchema).optional(),
  connect: z.lazy(() => FoodWhereUniqueInputObjectSchema).optional()
}).strict();
export const FoodCreateNestedOneWithoutItemInputObjectSchema: z.ZodType<Prisma.FoodCreateNestedOneWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodCreateNestedOneWithoutItemInput>;
export const FoodCreateNestedOneWithoutItemInputObjectZodSchema = makeSchema();
