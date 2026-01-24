import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { StoreUpdateWithoutFoodInputObjectSchema as StoreUpdateWithoutFoodInputObjectSchema } from './StoreUpdateWithoutFoodInput.schema';
import { StoreUncheckedUpdateWithoutFoodInputObjectSchema as StoreUncheckedUpdateWithoutFoodInputObjectSchema } from './StoreUncheckedUpdateWithoutFoodInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StoreUpdateWithoutFoodInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutFoodInputObjectSchema)])
}).strict();
export const StoreUpdateToOneWithWhereWithoutFoodInputObjectSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutFoodInput>;
export const StoreUpdateToOneWithWhereWithoutFoodInputObjectZodSchema = makeSchema();
