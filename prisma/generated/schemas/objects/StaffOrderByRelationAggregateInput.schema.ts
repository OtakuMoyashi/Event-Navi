import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StaffOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StaffOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffOrderByRelationAggregateInput>;
export const StaffOrderByRelationAggregateInputObjectZodSchema = makeSchema();
