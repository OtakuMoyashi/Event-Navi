import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketCreateNestedManyWithoutUserInputObjectSchema as TicketCreateNestedManyWithoutUserInputObjectSchema } from './TicketCreateNestedManyWithoutUserInput.schema';
import { PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema as PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema } from './PushSubscriptionCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pushSubscriptions: z.lazy(() => PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
