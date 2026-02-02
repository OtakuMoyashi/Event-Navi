import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const pushsubscriptionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PushSubscriptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PushSubscriptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PushSubscriptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PushSubscriptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PushSubscriptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  endpoint: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  p256dh: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  auth: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PushSubscriptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PushSubscriptionScalarWhereWithAggregatesInput> = pushsubscriptionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PushSubscriptionScalarWhereWithAggregatesInput>;
export const PushSubscriptionScalarWhereWithAggregatesInputObjectZodSchema = pushsubscriptionscalarwherewithaggregatesinputSchema;
