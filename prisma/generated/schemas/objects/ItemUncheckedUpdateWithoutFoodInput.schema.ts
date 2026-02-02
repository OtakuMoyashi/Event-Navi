import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StockLogUncheckedUpdateOneWithoutItemNestedInputObjectSchema as StockLogUncheckedUpdateOneWithoutItemNestedInputObjectSchema } from './StockLogUncheckedUpdateOneWithoutItemNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  stocklog: z.lazy(() => StockLogUncheckedUpdateOneWithoutItemNestedInputObjectSchema).optional()
}).strict();
export const ItemUncheckedUpdateWithoutFoodInputObjectSchema: z.ZodType<Prisma.ItemUncheckedUpdateWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemUncheckedUpdateWithoutFoodInput>;
export const ItemUncheckedUpdateWithoutFoodInputObjectZodSchema = makeSchema();
