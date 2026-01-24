import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TicketUncheckedCreateWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketUncheckedCreateWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedCreateWithoutAttractionInput>;
export const TicketUncheckedCreateWithoutAttractionInputObjectZodSchema = makeSchema();
