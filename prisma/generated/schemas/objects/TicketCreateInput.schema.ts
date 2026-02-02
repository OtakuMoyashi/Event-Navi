import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { AttractionCreateNestedOneWithoutTicketsInputObjectSchema as AttractionCreateNestedOneWithoutTicketsInputObjectSchema } from './AttractionCreateNestedOneWithoutTicketsInput.schema';
import { UserCreateNestedOneWithoutTicketsInputObjectSchema as UserCreateNestedOneWithoutTicketsInputObjectSchema } from './UserCreateNestedOneWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  attraction: z.lazy(() => AttractionCreateNestedOneWithoutTicketsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTicketsInputObjectSchema)
}).strict();
export const TicketCreateInputObjectSchema: z.ZodType<Prisma.TicketCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateInput>;
export const TicketCreateInputObjectZodSchema = makeSchema();
