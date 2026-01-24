import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AdminOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AdminOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminOrderByRelationAggregateInput>;
export const AdminOrderByRelationAggregateInputObjectZodSchema = makeSchema();
