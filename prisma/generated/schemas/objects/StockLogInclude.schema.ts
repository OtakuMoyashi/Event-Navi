import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const StockLogIncludeObjectSchema: z.ZodType<Prisma.StockLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.StockLogInclude>;
export const StockLogIncludeObjectZodSchema = makeSchema();
