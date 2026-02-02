import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.optional(),
  attractionId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TicketUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedCreateInput>;
export const TicketUncheckedCreateInputObjectZodSchema = makeSchema();
