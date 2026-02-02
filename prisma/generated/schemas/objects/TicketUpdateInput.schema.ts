import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketStatusFieldUpdateOperationsInputObjectSchema as EnumTicketStatusFieldUpdateOperationsInputObjectSchema } from './EnumTicketStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AttractionUpdateOneRequiredWithoutTicketsNestedInputObjectSchema as AttractionUpdateOneRequiredWithoutTicketsNestedInputObjectSchema } from './AttractionUpdateOneRequiredWithoutTicketsNestedInput.schema';
import { UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema as UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTicketsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  index: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  numberOfPeople: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([TicketStatusSchema, z.lazy(() => EnumTicketStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  attraction: z.lazy(() => AttractionUpdateOneRequiredWithoutTicketsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema).optional()
}).strict();
export const TicketUpdateInputObjectSchema: z.ZodType<Prisma.TicketUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateInput>;
export const TicketUpdateInputObjectZodSchema = makeSchema();
