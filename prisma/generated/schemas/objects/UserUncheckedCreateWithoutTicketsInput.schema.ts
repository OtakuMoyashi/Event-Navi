import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema as PushSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pushSubscriptions: z.lazy(() => PushSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput>;
export const UserUncheckedCreateWithoutTicketsInputObjectZodSchema = makeSchema();
