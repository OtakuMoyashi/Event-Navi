import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema as StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema } from './StoreUpdateOneRequiredWithoutAttractionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  store: z.lazy(() => StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema).optional()
}).strict();
export const AttractionUpdateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.AttractionUpdateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpdateWithoutTicketsInput>;
export const AttractionUpdateWithoutTicketsInputObjectZodSchema = makeSchema();
