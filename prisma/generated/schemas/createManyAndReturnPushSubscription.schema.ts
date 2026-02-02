import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionSelectObjectSchema as PushSubscriptionSelectObjectSchema } from './objects/PushSubscriptionSelect.schema';
import { PushSubscriptionCreateManyInputObjectSchema as PushSubscriptionCreateManyInputObjectSchema } from './objects/PushSubscriptionCreateManyInput.schema';

export const PushSubscriptionCreateManyAndReturnSchema: z.ZodType<Prisma.PushSubscriptionCreateManyAndReturnArgs> = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), data: z.union([ PushSubscriptionCreateManyInputObjectSchema, z.array(PushSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionCreateManyAndReturnArgs>;

export const PushSubscriptionCreateManyAndReturnZodSchema = z.object({ select: PushSubscriptionSelectObjectSchema.optional(), data: z.union([ PushSubscriptionCreateManyInputObjectSchema, z.array(PushSubscriptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();