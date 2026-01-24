import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  index: z.literal(true).optional(),
  numberOfPeople: z.literal(true).optional(),
  status: z.literal(true).optional(),
  attractionId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TicketCountAggregateInputObjectSchema: z.ZodType<Prisma.TicketCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketCountAggregateInputType>;
export const TicketCountAggregateInputObjectZodSchema = makeSchema();
