import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './objects/PushSubscriptionInclude.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './objects/PushSubscriptionWhereUniqueInput.schema';
import { PushSubscriptionCreateInputObjectSchema as PushSubscriptionCreateInputObjectSchema } from './objects/PushSubscriptionCreateInput.schema';
import { PushSubscriptionUncheckedCreateInputObjectSchema as PushSubscriptionUncheckedCreateInputObjectSchema } from './objects/PushSubscriptionUncheckedCreateInput.schema';
import { PushSubscriptionUpdateInputObjectSchema as PushSubscriptionUpdateInputObjectSchema } from './objects/PushSubscriptionUpdateInput.schema';
import { PushSubscriptionUncheckedUpdateInputObjectSchema as PushSubscriptionUncheckedUpdateInputObjectSchema } from './objects/PushSubscriptionUncheckedUpdateInput.schema';

export const PushSubscriptionUpsertOneSchema: z.ZodType<Prisma.PushSubscriptionUpsertArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), where: PushSubscriptionWhereUniqueInputObjectSchema, create: z.union([ PushSubscriptionCreateInputObjectSchema, PushSubscriptionUncheckedCreateInputObjectSchema ]), update: z.union([ PushSubscriptionUpdateInputObjectSchema, PushSubscriptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionUpsertArgs>;

export const PushSubscriptionUpsertOneZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), include: PushSubscriptionIncludeObjectSchema.optional(), where: PushSubscriptionWhereUniqueInputObjectSchema, create: z.union([ PushSubscriptionCreateInputObjectSchema, PushSubscriptionUncheckedCreateInputObjectSchema ]), update: z.union([ PushSubscriptionUpdateInputObjectSchema, PushSubscriptionUncheckedUpdateInputObjectSchema ]) }).strict();