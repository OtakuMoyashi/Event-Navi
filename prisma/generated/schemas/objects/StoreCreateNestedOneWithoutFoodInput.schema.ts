import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutFoodInputObjectSchema as StoreCreateWithoutFoodInputObjectSchema } from './StoreCreateWithoutFoodInput.schema';
import { StoreUncheckedCreateWithoutFoodInputObjectSchema as StoreUncheckedCreateWithoutFoodInputObjectSchema } from './StoreUncheckedCreateWithoutFoodInput.schema';
import { StoreCreateOrConnectWithoutFoodInputObjectSchema as StoreCreateOrConnectWithoutFoodInputObjectSchema } from './StoreCreateOrConnectWithoutFoodInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutFoodInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutFoodInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional()
}).strict();
export const StoreCreateNestedOneWithoutFoodInputObjectSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateNestedOneWithoutFoodInput>;
export const StoreCreateNestedOneWithoutFoodInputObjectZodSchema = makeSchema();
