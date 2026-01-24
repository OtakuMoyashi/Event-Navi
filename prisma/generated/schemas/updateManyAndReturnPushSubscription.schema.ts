import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionUpdateManyMutationInputObjectSchema as PushSubscriptionUpdateManyMutationInputObjectSchema } from './objects/PushSubscriptionUpdateManyMutationInput.schema';
import { PushSubscriptionWhereInputObjectSchema as PushSubscriptionWhereInputObjectSchema } from './objects/PushSubscriptionWhereInput.schema';

export const PushSubscriptionUpdateManyAndReturnSchema: z.ZodType<Prisma.PushSubscriptionUpdateManyAndReturnArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), data: PushSubscriptionUpdateManyMutationInputObjectSchema, where: PushSubscriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionUpdateManyAndReturnArgs>;

export const PushSubscriptionUpdateManyAndReturnZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), data: PushSubscriptionUpdateManyMutationInputObjectSchema, where: PushSubscriptionWhereInputObjectSchema.optional() }).strict();