import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  endpoint: z.literal(true).optional(),
  p256dh: z.literal(true).optional(),
  auth: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const PushSubscriptionMinAggregateInputObjectSchema: z.ZodType<Prisma.PushSubscriptionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionMinAggregateInputType>;
export const PushSubscriptionMinAggregateInputObjectZodSchema = makeSchema();
