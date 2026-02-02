import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutPushSubscriptionsInputObjectSchema as UserCreateNestedOneWithoutPushSubscriptionsInputObjectSchema } from './UserCreateNestedOneWithoutPushSubscriptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPushSubscriptionsInputObjectSchema)
}).strict();
export const PushSubscriptionCreateInputObjectSchema: z.ZodType<Prisma.PushSubscriptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionCreateInput>;
export const PushSubscriptionCreateInputObjectZodSchema = makeSchema();
