import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './PushSubscriptionSelect.schema';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './PushSubscriptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PushSubscriptionSelectObjectSchema).optional(),
  include: z.lazy(() => PushSubscriptionIncludeObjectSchema).optional()
}).strict();
export const PushSubscriptionArgsObjectSchema = makeSchema();
export const PushSubscriptionArgsObjectZodSchema = makeSchema();
