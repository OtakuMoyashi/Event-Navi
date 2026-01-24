import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPushSubscriptionsNestedInputObjectSchema as UserUpdateOneRequiredWithoutPushSubscriptionsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  endpoint: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  p256dh: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  auth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPushSubscriptionsNestedInputObjectSchema).optional()
}).strict();
export const PushSubscriptionUpdateInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUpdateInput>;
export const PushSubscriptionUpdateInputObjectZodSchema = makeSchema();
