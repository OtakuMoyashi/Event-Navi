import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const pushsubscriptionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema), z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema), z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  endpoint: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  p256dh: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  auth: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PushSubscriptionScalarWhereInputObjectSchema: z.ZodType<Prisma.PushSubscriptionScalarWhereInput> = pushsubscriptionscalarwhereinputSchema as unknown as z.ZodType<Prisma.PushSubscriptionScalarWhereInput>;
export const PushSubscriptionScalarWhereInputObjectZodSchema = pushsubscriptionscalarwhereinputSchema;
