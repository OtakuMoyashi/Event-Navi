import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  endpoint: z.boolean().optional(),
  p256dh: z.boolean().optional(),
  auth: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const PushSubscriptionSelectObjectSchema: z.ZodType<Prisma.PushSubscriptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionSelect>;
export const PushSubscriptionSelectObjectZodSchema = makeSchema();
