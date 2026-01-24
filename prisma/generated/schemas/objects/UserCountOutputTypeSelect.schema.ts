import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserCountOutputTypeCountTicketsArgsObjectSchema as UserCountOutputTypeCountTicketsArgsObjectSchema } from './UserCountOutputTypeCountTicketsArgs.schema';
import { UserCountOutputTypeCountPushSubscriptionsArgsObjectSchema as UserCountOutputTypeCountPushSubscriptionsArgsObjectSchema } from './UserCountOutputTypeCountPushSubscriptionsArgs.schema'

const makeSchema = () => z.object({
  tickets: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTicketsArgsObjectSchema)]).optional(),
  pushSubscriptions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPushSubscriptionsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
