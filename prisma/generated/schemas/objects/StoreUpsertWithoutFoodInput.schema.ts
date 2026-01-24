import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreUpdateWithoutFoodInputObjectSchema as StoreUpdateWithoutFoodInputObjectSchema } from './StoreUpdateWithoutFoodInput.schema';
import { StoreUncheckedUpdateWithoutFoodInputObjectSchema as StoreUncheckedUpdateWithoutFoodInputObjectSchema } from './StoreUncheckedUpdateWithoutFoodInput.schema';
import { StoreCreateWithoutFoodInputObjectSchema as StoreCreateWithoutFoodInputObjectSchema } from './StoreCreateWithoutFoodInput.schema';
import { StoreUncheckedCreateWithoutFoodInputObjectSchema as StoreUncheckedCreateWithoutFoodInputObjectSchema } from './StoreUncheckedCreateWithoutFoodInput.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StoreUpdateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutFoodInputObjectSchema)]),
  create: z.union([z.lazy(() => StoreCreateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutFoodInputObjectSchema)]),
  where: z.lazy(() => StoreWhereInputObjectSchema).optional()
}).strict();
export const StoreUpsertWithoutFoodInputObjectSchema: z.ZodType<Prisma.StoreUpsertWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpsertWithoutFoodInput>;
export const StoreUpsertWithoutFoodInputObjectZodSchema = makeSchema();
