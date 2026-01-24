import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketCountOrderByAggregateInputObjectSchema as TicketCountOrderByAggregateInputObjectSchema } from './TicketCountOrderByAggregateInput.schema';
import { TicketAvgOrderByAggregateInputObjectSchema as TicketAvgOrderByAggregateInputObjectSchema } from './TicketAvgOrderByAggregateInput.schema';
import { TicketMaxOrderByAggregateInputObjectSchema as TicketMaxOrderByAggregateInputObjectSchema } from './TicketMaxOrderByAggregateInput.schema';
import { TicketMinOrderByAggregateInputObjectSchema as TicketMinOrderByAggregateInputObjectSchema } from './TicketMinOrderByAggregateInput.schema';
import { TicketSumOrderByAggregateInputObjectSchema as TicketSumOrderByAggregateInputObjectSchema } from './TicketSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  numberOfPeople: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  attractionId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TicketCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TicketAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TicketMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TicketMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TicketSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketOrderByWithAggregationInput>;
export const TicketOrderByWithAggregationInputObjectZodSchema = makeSchema();
