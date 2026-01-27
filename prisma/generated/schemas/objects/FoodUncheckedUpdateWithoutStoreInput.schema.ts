import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUncheckedUpdateOneWithoutFoodNestedInputObjectSchema as ItemUncheckedUpdateOneWithoutFoodNestedInputObjectSchema } from './ItemUncheckedUpdateOneWithoutFoodNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUncheckedUpdateOneWithoutFoodNestedInputObjectSchema).optional()
}).strict();
export const FoodUncheckedUpdateWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodUncheckedUpdateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUncheckedUpdateWithoutStoreInput>;
export const FoodUncheckedUpdateWithoutStoreInputObjectZodSchema = makeSchema();
