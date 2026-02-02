import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  itemId: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional(),
  change: z.boolean().optional(),
  reason: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const StockLogSelectObjectSchema: z.ZodType<Prisma.StockLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.StockLogSelect>;
export const StockLogSelectObjectZodSchema = makeSchema();
