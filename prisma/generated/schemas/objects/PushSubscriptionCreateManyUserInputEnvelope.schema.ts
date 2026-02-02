import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionCreateManyUserInputObjectSchema as PushSubscriptionCreateManyUserInputObjectSchema } from './PushSubscriptionCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PushSubscriptionCreateManyUserInputObjectSchema), z.lazy(() => PushSubscriptionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PushSubscriptionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PushSubscriptionCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionCreateManyUserInputEnvelope>;
export const PushSubscriptionCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
