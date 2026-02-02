import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema as TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutUserInput.schema';
import { PushSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema as PushSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pushSubscriptions: z.lazy(() => PushSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
