import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './objects/PushSubscriptionInclude.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './objects/PushSubscriptionWhereUniqueInput.schema';

export const PushSubscriptionFindUniqueSchema: z.ZodType<Prisma.PushSubscriptionFindUniqueArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), where: PushSubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionFindUniqueArgs>;

export const PushSubscriptionFindUniqueZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), where: PushSubscriptionWhereUniqueInputObjectSchema }).strict();