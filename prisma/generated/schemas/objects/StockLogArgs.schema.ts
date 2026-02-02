import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './StockLogSelect.schema';
import { StockLogIncludeObjectSchema as StockLogIncludeObjectSchema } from './StockLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StockLogSelectObjectSchema).optional(),
  include: z.lazy(() => StockLogIncludeObjectSchema).optional()
}).strict();
export const StockLogArgsObjectSchema = makeSchema();
export const StockLogArgsObjectZodSchema = makeSchema();
