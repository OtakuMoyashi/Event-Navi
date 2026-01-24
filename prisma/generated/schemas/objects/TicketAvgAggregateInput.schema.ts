import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  index: z.literal(true).optional(),
  numberOfPeople: z.literal(true).optional()
}).strict();
export const TicketAvgAggregateInputObjectSchema: z.ZodType<Prisma.TicketAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketAvgAggregateInputType>;
export const TicketAvgAggregateInputObjectZodSchema = makeSchema();
