import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './objects/StockLogSelect.schema';
import { StockLogIncludeObjectSchema as StockLogIncludeObjectSchema } from './objects/StockLogInclude.schema';
import { StockLogCreateInputObjectSchema as StockLogCreateInputObjectSchema } from './objects/StockLogCreateInput.schema';
import { StockLogUncheckedCreateInputObjectSchema as StockLogUncheckedCreateInputObjectSchema } from './objects/StockLogUncheckedCreateInput.schema';

export const StockLogCreateOneSchema: z.ZodType<Prisma.StockLogCreateArgs> = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), data: z.union([StockLogCreateInputObjectSchema, StockLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StockLogCreateArgs>;

export const StockLogCreateOneZodSchema = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), data: z.union([StockLogCreateInputObjectSchema, StockLogUncheckedCreateInputObjectSchema]) }).strict();