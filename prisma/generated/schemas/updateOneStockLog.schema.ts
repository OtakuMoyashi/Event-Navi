import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './objects/StockLogSelect.schema';
import { StockLogIncludeObjectSchema as StockLogIncludeObjectSchema } from './objects/StockLogInclude.schema';
import { StockLogUpdateInputObjectSchema as StockLogUpdateInputObjectSchema } from './objects/StockLogUpdateInput.schema';
import { StockLogUncheckedUpdateInputObjectSchema as StockLogUncheckedUpdateInputObjectSchema } from './objects/StockLogUncheckedUpdateInput.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './objects/StockLogWhereUniqueInput.schema';

export const StockLogUpdateOneSchema: z.ZodType<Prisma.StockLogUpdateArgs> = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), data: z.union([StockLogUpdateInputObjectSchema, StockLogUncheckedUpdateInputObjectSchema]), where: StockLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StockLogUpdateArgs>;

export const StockLogUpdateOneZodSchema = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), data: z.union([StockLogUpdateInputObjectSchema, StockLogUncheckedUpdateInputObjectSchema]), where: StockLogWhereUniqueInputObjectSchema }).strict();