import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './objects/StockLogSelect.schema';
import { StockLogIncludeObjectSchema as StockLogIncludeObjectSchema } from './objects/StockLogInclude.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './objects/StockLogWhereUniqueInput.schema';

export const StockLogDeleteOneSchema: z.ZodType<Prisma.StockLogDeleteArgs> = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), where: StockLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StockLogDeleteArgs>;

export const StockLogDeleteOneZodSchema = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), where: StockLogWhereUniqueInputObjectSchema }).strict();