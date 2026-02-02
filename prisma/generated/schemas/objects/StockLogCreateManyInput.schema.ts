import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  itemId: z.string(),
  change: z.number().int(),
  reason: StockChangedReasonSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StockLogCreateManyInputObjectSchema: z.ZodType<Prisma.StockLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogCreateManyInput>;
export const StockLogCreateManyInputObjectZodSchema = makeSchema();
