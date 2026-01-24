import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  endpoint: SortOrderSchema.optional(),
  p256dh: SortOrderSchema.optional(),
  auth: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PushSubscriptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PushSubscriptionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionOrderByWithRelationInput>;
export const PushSubscriptionOrderByWithRelationInputObjectZodSchema = makeSchema();
