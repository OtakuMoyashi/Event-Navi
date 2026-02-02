import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const pushsubscriptionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PushSubscriptionWhereInputObjectSchema), z.lazy(() => PushSubscriptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PushSubscriptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PushSubscriptionWhereInputObjectSchema), z.lazy(() => PushSubscriptionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  endpoint: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  p256dh: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  auth: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const PushSubscriptionWhereInputObjectSchema: z.ZodType<Prisma.PushSubscriptionWhereInput> = pushsubscriptionwhereinputSchema as unknown as z.ZodType<Prisma.PushSubscriptionWhereInput>;
export const PushSubscriptionWhereInputObjectZodSchema = pushsubscriptionwhereinputSchema;
