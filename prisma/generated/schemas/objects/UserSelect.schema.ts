import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { PushSubscriptionFindManySchema as PushSubscriptionFindManySchema } from '../findManyPushSubscription.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  pushSubscriptions: z.union([z.boolean(), z.lazy(() => PushSubscriptionFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
