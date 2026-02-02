import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PushSubscriptionCreateManyUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionCreateManyUserInput>;
export const PushSubscriptionCreateManyUserInputObjectZodSchema = makeSchema();
