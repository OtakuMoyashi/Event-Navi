import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { PushSubscriptionFindManySchema as PushSubscriptionFindManySchema } from '../findManyPushSubscription.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  pushSubscriptions: z.union([z.boolean(), z.lazy(() => PushSubscriptionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
