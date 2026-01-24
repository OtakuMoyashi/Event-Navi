import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutAttractionNestedInputObjectSchema as TicketUncheckedUpdateManyWithoutAttractionNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutAttractionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  storeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tickets: z.lazy(() => TicketUncheckedUpdateManyWithoutAttractionNestedInputObjectSchema).optional()
}).strict();
export const AttractionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AttractionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUncheckedUpdateInput>;
export const AttractionUncheckedUpdateInputObjectZodSchema = makeSchema();
