import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  numberOfPeople: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  attractionId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TicketCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCountOrderByAggregateInput>;
export const TicketCountOrderByAggregateInputObjectZodSchema = makeSchema();
