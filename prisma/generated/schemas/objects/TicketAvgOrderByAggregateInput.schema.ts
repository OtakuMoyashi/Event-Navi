import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  index: SortOrderSchema.optional(),
  numberOfPeople: SortOrderSchema.optional()
}).strict();
export const TicketAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketAvgOrderByAggregateInput>;
export const TicketAvgOrderByAggregateInputObjectZodSchema = makeSchema();
