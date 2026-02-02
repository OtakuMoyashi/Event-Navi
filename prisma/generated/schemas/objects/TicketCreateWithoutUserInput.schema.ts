import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { AttractionCreateNestedOneWithoutTicketsInputObjectSchema as AttractionCreateNestedOneWithoutTicketsInputObjectSchema } from './AttractionCreateNestedOneWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attraction: z.lazy(() => AttractionCreateNestedOneWithoutTicketsInputObjectSchema)
}).strict();
export const TicketCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateWithoutUserInput>;
export const TicketCreateWithoutUserInputObjectZodSchema = makeSchema();
