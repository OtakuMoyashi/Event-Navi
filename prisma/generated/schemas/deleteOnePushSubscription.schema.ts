import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './objects/PushSubscriptionInclude.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './objects/PushSubscriptionWhereUniqueInput.schema';

export const PushSubscriptionDeleteOneSchema: z.ZodType<Prisma.PushSubscriptionDeleteArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), where: PushSubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionDeleteArgs>;

export const PushSubscriptionDeleteOneZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), where: PushSubscriptionWhereUniqueInputObjectSchema }).strict();