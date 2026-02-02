import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './objects/PushSubscriptionInclude.schema';
import { PushSubscriptionUpdateInputObjectSchema as PushSubscriptionUpdateInputObjectSchema } from './objects/PushSubscriptionUpdateInput.schema';
import { PushSubscriptionUncheckedUpdateInputObjectSchema as PushSubscriptionUncheckedUpdateInputObjectSchema } from './objects/PushSubscriptionUncheckedUpdateInput.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './objects/PushSubscriptionWhereUniqueInput.schema';

export const PushSubscriptionUpdateOneSchema: z.ZodType<Prisma.PushSubscriptionUpdateArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), data: z.union([PushSubscriptionUpdateInputObjectSchema, PushSubscriptionUncheckedUpdateInputObjectSchema]), where: PushSubscriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionUpdateArgs>;

export const PushSubscriptionUpdateOneZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), data: z.union([PushSubscriptionUpdateInputObjectSchema, PushSubscriptionUncheckedUpdateInputObjectSchema]), where: PushSubscriptionWhereUniqueInputObjectSchema }).strict();