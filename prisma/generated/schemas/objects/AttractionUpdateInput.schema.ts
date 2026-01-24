import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema as StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema } from './StoreUpdateOneRequiredWithoutAttractionNestedInput.schema';
import { TicketUpdateManyWithoutAttractionNestedInputObjectSchema as TicketUpdateManyWithoutAttractionNestedInputObjectSchema } from './TicketUpdateManyWithoutAttractionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  store: z.lazy(() => StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketUpdateManyWithoutAttractionNestedInputObjectSchema).optional()
}).strict();
export const AttractionUpdateInputObjectSchema: z.ZodType<Prisma.AttractionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpdateInput>;
export const AttractionUpdateInputObjectZodSchema = makeSchema();
