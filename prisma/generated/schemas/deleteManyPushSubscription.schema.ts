import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionWhereInputObjectSchema as PushSubscriptionWhereInputObjectSchema } from './objects/PushSubscriptionWhereInput.schema';

export const PushSubscriptionDeleteManySchema: z.ZodType<Prisma.PushSubscriptionDeleteManyArgs> = z.object({ where: PushSubscriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionDeleteManyArgs>;

export const PushSubscriptionDeleteManyZodSchema = z.object({ where: PushSubscriptionWhereInputObjectSchema.optional() }).strict();