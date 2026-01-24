import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  index: z.number().int(),
  numberOfPeople: z.number().int(),
  status: TicketStatusSchema.optional(),
  attractionId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TicketCreateManyUserInputObjectSchema: z.ZodType<Prisma.TicketCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyUserInput>;
export const TicketCreateManyUserInputObjectZodSchema = makeSchema();
