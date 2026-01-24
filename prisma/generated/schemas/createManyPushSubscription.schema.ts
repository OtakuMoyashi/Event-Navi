import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionCreateManyInputObjectSchema as PushSubscriptionCreateManyInputObjectSchema } from './objects/PushSubscriptionCreateManyInput.schema';

export const PushSubscriptionCreateManySchema: z.ZodType<Prisma.PushSubscriptionCreateManyArgs> = z.object({ data: z.union([ PushSubscriptionCreateManyInputObjectSchema, z.array(PushSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionCreateManyArgs>;

export const PushSubscriptionCreateManyZodSchema = z.object({ data: z.union([ PushSubscriptionCreateManyInputObjectSchema, z.array(PushSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();