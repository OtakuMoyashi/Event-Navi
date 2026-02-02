import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema as PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema } from './PushSubscriptionCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pushSubscriptions: z.lazy(() => PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutTicketsInput>;
export const UserCreateWithoutTicketsInputObjectZodSchema = makeSchema();
