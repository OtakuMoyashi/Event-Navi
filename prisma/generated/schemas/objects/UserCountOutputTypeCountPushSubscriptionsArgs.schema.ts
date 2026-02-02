import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionWhereInputObjectSchema as PushSubscriptionWhereInputObjectSchema } from './PushSubscriptionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PushSubscriptionWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPushSubscriptionsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPushSubscriptionsArgsObjectZodSchema = makeSchema();
