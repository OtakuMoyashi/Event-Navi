import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './objects/PushSubscriptionInclude.schema';
import { PushSubscriptionCreateInputObjectSchema as PushSubscriptionCreateInputObjectSchema } from './objects/PushSubscriptionCreateInput.schema';
import { PushSubscriptionUncheckedCreateInputObjectSchema as PushSubscriptionUncheckedCreateInputObjectSchema } from './objects/PushSubscriptionUncheckedCreateInput.schema';

export const PushSubscriptionCreateOneSchema: z.ZodType<Prisma.PushSubscriptionCreateArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), data: z.union([PushSubscriptionCreateInputObjectSchema, PushSubscriptionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionCreateArgs>;

export const PushSubscriptionCreateOneZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), data: z.union([PushSubscriptionCreateInputObjectSchema, PushSubscriptionUncheckedCreateInputObjectSchema]) }).strict();