import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockChangedReasonSchema } from '../enums/StockChangedReason.schema';
import { ItemCreateNestedOneWithoutStocklogInputObjectSchema as ItemCreateNestedOneWithoutStocklogInputObjectSchema } from './ItemCreateNestedOneWithoutStocklogInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  change: z.number().int(),
  reason: StockChangedReasonSchema,
  createdAt: z.coerce.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutStocklogInputObjectSchema)
}).strict();
export const StockLogCreateInputObjectSchema: z.ZodType<Prisma.StockLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogCreateInput>;
export const StockLogCreateInputObjectZodSchema = makeSchema();
