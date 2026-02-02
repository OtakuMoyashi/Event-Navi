import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreCreateWithoutFoodInputObjectSchema as StoreCreateWithoutFoodInputObjectSchema } from './StoreCreateWithoutFoodInput.schema';
import { StoreUncheckedCreateWithoutFoodInputObjectSchema as StoreUncheckedCreateWithoutFoodInputObjectSchema } from './StoreUncheckedCreateWithoutFoodInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoreCreateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutFoodInputObjectSchema)])
}).strict();
export const StoreCreateOrConnectWithoutFoodInputObjectSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateOrConnectWithoutFoodInput>;
export const StoreCreateOrConnectWithoutFoodInputObjectZodSchema = makeSchema();
