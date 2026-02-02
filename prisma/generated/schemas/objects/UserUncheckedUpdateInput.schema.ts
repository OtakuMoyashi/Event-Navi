import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PushSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PushSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tickets: z.lazy(() => TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  pushSubscriptions: z.lazy(() => PushSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = makeSchema();
