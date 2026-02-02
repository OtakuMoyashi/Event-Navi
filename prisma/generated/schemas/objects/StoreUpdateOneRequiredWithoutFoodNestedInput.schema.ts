import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutFoodInputObjectSchema as StoreCreateWithoutFoodInputObjectSchema } from './StoreCreateWithoutFoodInput.schema';
import { StoreUncheckedCreateWithoutFoodInputObjectSchema as StoreUncheckedCreateWithoutFoodInputObjectSchema } from './StoreUncheckedCreateWithoutFoodInput.schema';
import { StoreCreateOrConnectWithoutFoodInputObjectSchema as StoreCreateOrConnectWithoutFoodInputObjectSchema } from './StoreCreateOrConnectWithoutFoodInput.schema';
import { StoreUpsertWithoutFoodInputObjectSchema as StoreUpsertWithoutFoodInputObjectSchema } from './StoreUpsertWithoutFoodInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateToOneWithWhereWithoutFoodInputObjectSchema as StoreUpdateToOneWithWhereWithoutFoodInputObjectSchema } from './StoreUpdateToOneWithWhereWithoutFoodInput.schema';
import { StoreUpdateWithoutFoodInputObjectSchema as StoreUpdateWithoutFoodInputObjectSchema } from './StoreUpdateWithoutFoodInput.schema';
import { StoreUncheckedUpdateWithoutFoodInputObjectSchema as StoreUncheckedUpdateWithoutFoodInputObjectSchema } from './StoreUncheckedUpdateWithoutFoodInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutFoodInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutFoodInputObjectSchema).optional(),
  upsert: z.lazy(() => StoreUpsertWithoutFoodInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StoreUpdateToOneWithWhereWithoutFoodInputObjectSchema), z.lazy(() => StoreUpdateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutFoodInputObjectSchema)]).optional()
}).strict();
export const StoreUpdateOneRequiredWithoutFoodNestedInputObjectSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutFoodNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateOneRequiredWithoutFoodNestedInput>;
export const StoreUpdateOneRequiredWithoutFoodNestedInputObjectZodSchema = makeSchema();
