import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const EventMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventMaxOrderByAggregateInput>;
export const EventMaxOrderByAggregateInputObjectZodSchema = makeSchema();
