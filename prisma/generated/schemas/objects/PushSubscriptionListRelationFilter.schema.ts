import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionWhereInputObjectSchema as PushSubscriptionWhereInputObjectSchema } from './PushSubscriptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PushSubscriptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => PushSubscriptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => PushSubscriptionWhereInputObjectSchema).optional()
}).strict();
export const PushSubscriptionListRelationFilterObjectSchema: z.ZodType<Prisma.PushSubscriptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionListRelationFilter>;
export const PushSubscriptionListRelationFilterObjectZodSchema = makeSchema();
