import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema as TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPushSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutPushSubscriptionsInput>;
export const UserUncheckedCreateWithoutPushSubscriptionsInputObjectZodSchema = makeSchema();
