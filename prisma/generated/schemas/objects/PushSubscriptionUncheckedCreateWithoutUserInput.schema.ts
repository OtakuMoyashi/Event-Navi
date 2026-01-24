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
export const PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUncheckedCreateWithoutUserInput>;
export const PushSubscriptionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
