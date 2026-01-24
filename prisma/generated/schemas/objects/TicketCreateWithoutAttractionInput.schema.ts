import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { UserCreateNestedOneWithoutTicketsInputObjectSchema as UserCreateNestedOneWithoutTicketsInputObjectSchema } from './UserCreateNestedOneWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTicketsInputObjectSchema)
}).strict();
export const TicketCreateWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketCreateWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateWithoutAttractionInput>;
export const TicketCreateWithoutAttractionInputObjectZodSchema = makeSchema();
