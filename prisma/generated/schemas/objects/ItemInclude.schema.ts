import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogArgsObjectSchema as StockLogArgsObjectSchema } from './StockLogArgs.schema';
import { FoodArgsObjectSchema as FoodArgsObjectSchema } from './FoodArgs.schema'

const makeSchema = () => z.object({
  stocklog: z.union([z.boolean(), z.lazy(() => StockLogArgsObjectSchema)]).optional(),
  food: z.union([z.boolean(), z.lazy(() => FoodArgsObjectSchema)]).optional()
}).strict();
export const ItemIncludeObjectSchema: z.ZodType<Prisma.ItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.ItemInclude>;
export const ItemIncludeObjectZodSchema = makeSchema();
