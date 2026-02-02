import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionUpdateManyMutationInputObjectSchema as PushSubscriptionUpdateManyMutationInputObjectSchema } from './objects/PushSubscriptionUpdateManyMutationInput.schema';
import { PushSubscriptionWhereInputObjectSchema as PushSubscriptionWhereInputObjectSchema } from './objects/PushSubscriptionWhereInput.schema';

export const PushSubscriptionUpdateManySchema: z.ZodType<Prisma.PushSubscriptionUpdateManyArgs> = z.object({ data: PushSubscriptionUpdateManyMutationInputObjectSchema, where: PushSubscriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionUpdateManyArgs>;

export const PushSubscriptionUpdateManyZodSchema = z.object({ data: PushSubscriptionUpdateManyMutationInputObjectSchema, where: PushSubscriptionWhereInputObjectSchema.optional() }).strict();