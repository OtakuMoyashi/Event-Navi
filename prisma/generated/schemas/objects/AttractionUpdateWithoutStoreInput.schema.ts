import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TicketUpdateManyWithoutAttractionNestedInputObjectSchema as TicketUpdateManyWithoutAttractionNestedInputObjectSchema } from './TicketUpdateManyWithoutAttractionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tickets: z.lazy(() => TicketUpdateManyWithoutAttractionNestedInputObjectSchema).optional()
}).strict();
export const AttractionUpdateWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionUpdateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpdateWithoutStoreInput>;
export const AttractionUpdateWithoutStoreInputObjectZodSchema = makeSchema();
