import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PushSubscriptionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUncheckedCreateInput>;
export const PushSubscriptionUncheckedCreateInputObjectZodSchema = makeSchema();
