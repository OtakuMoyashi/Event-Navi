import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StoreUpdateOneRequiredWithoutFoodNestedInputObjectSchema as StoreUpdateOneRequiredWithoutFoodNestedInputObjectSchema } from './StoreUpdateOneRequiredWithoutFoodNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  store: z.lazy(() => StoreUpdateOneRequiredWithoutFoodNestedInputObjectSchema).optional()
}).strict();
export const FoodUpdateWithoutItemInputObjectSchema: z.ZodType<Prisma.FoodUpdateWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodUpdateWithoutItemInput>;
export const FoodUpdateWithoutItemInputObjectZodSchema = makeSchema();
