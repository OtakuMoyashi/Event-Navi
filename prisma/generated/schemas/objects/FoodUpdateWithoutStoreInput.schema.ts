import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateOneWithoutFoodNestedInputObjectSchema as ItemUpdateOneWithoutFoodNestedInputObjectSchema } from './ItemUpdateOneWithoutFoodNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneWithoutFoodNestedInputObjectSchema).optional()
}).strict();
export const FoodUpdateWithoutStoreInputObjectSchema: z.ZodType<Prisma.FoodUpdateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpdateWithoutStoreInput>;
export const FoodUpdateWithoutStoreInputObjectZodSchema = makeSchema();
