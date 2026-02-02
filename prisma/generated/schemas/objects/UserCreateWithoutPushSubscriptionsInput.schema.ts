import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketCreateNestedManyWithoutUserInputObjectSchema as TicketCreateNestedManyWithoutUserInputObjectSchema } from './TicketCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutPushSubscriptionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPushSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutPushSubscriptionsInput>;
export const UserCreateWithoutPushSubscriptionsInputObjectZodSchema = makeSchema();
