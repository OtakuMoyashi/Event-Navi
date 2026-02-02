import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  index: SortOrderSchema.optional(),
  numberOfPeople: SortOrderSchema.optional()
}).strict();
export const TicketSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketSumOrderByAggregateInput>;
export const TicketSumOrderByAggregateInputObjectZodSchema = makeSchema();
