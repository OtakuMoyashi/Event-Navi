import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema'

const makeSchema = () => z.object({
  set: StockChangedReasonSchema.optional()
}).strict();
export const EnumStockChangedReasonFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumStockChangedReasonFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumStockChangedReasonFieldUpdateOperationsInput>;
export const EnumStockChangedReasonFieldUpdateOperationsInputObjectZodSchema = makeSchema();
