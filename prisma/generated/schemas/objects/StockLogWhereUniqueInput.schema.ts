import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  itemId: z.string().optional()
}).strict();
export const StockLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.StockLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogWhereUniqueInput>;
export const StockLogWhereUniqueInputObjectZodSchema = makeSchema();
