import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PushSubscriptionUpdateManyWithoutUserNestedInputObjectSchema as PushSubscriptionUpdateManyWithoutUserNestedInputObjectSchema } from './PushSubscriptionUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  pushSubscriptions: z.lazy(() => PushSubscriptionUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutTicketsInput>;
export const UserUpdateWithoutTicketsInputObjectZodSchema = makeSchema();
