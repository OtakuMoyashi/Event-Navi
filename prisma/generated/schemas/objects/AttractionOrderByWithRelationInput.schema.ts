import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StoreOrderByWithRelationInputObjectSchema as StoreOrderByWithRelationInputObjectSchema } from './StoreOrderByWithRelationInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema as TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  storeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  store: z.lazy(() => StoreOrderByWithRelationInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AttractionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AttractionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionOrderByWithRelationInput>;
export const AttractionOrderByWithRelationInputObjectZodSchema = makeSchema();
