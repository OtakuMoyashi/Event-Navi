import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { EnumStockChangedReasonFieldUpdateOperationsInputObjectSchema as EnumStockChangedReasonFieldUpdateOperationsInputObjectSchema } from './EnumStockChangedReasonFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutStocklogNestedInputObjectSchema as ItemUpdateOneRequiredWithoutStocklogNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutStocklogNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  change: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([StockChangedReasonSchema, z.lazy(() => EnumStockChangedReasonFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutStocklogNestedInputObjectSchema).optional()
}).strict();
export const StockLogUpdateInputObjectSchema: z.ZodType<Prisma.StockLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogUpdateInput>;
export const StockLogUpdateInputObjectZodSchema = makeSchema();
