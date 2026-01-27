import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './objects/StockLogSelect.schema';
import { StockLogIncludeObjectSchema as StockLogIncludeObjectSchema } from './objects/StockLogInclude.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './objects/StockLogWhereUniqueInput.schema';
import { StockLogCreateInputObjectSchema as StockLogCreateInputObjectSchema } from './objects/StockLogCreateInput.schema';
import { StockLogUncheckedCreateInputObjectSchema as StockLogUncheckedCreateInputObjectSchema } from './objects/StockLogUncheckedCreateInput.schema';
import { StockLogUpdateInputObjectSchema as StockLogUpdateInputObjectSchema } from './objects/StockLogUpdateInput.schema';
import { StockLogUncheckedUpdateInputObjectSchema as StockLogUncheckedUpdateInputObjectSchema } from './objects/StockLogUncheckedUpdateInput.schema';

export const StockLogUpsertOneSchema: z.ZodType<Prisma.StockLogUpsertArgs> = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), where: StockLogWhereUniqueInputObjectSchema, create: z.union([ StockLogCreateInputObjectSchema, StockLogUncheckedCreateInputObjectSchema ]), update: z.union([ StockLogUpdateInputObjectSchema, StockLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StockLogUpsertArgs>;

export const StockLogUpsertOneZodSchema = z.object({ select: StockLogSelectObjectSchema.optional(), include: StockLogIncludeObjectSchema.optional(), where: StockLogWhereUniqueInputObjectSchema, create: z.union([ StockLogCreateInputObjectSchema, StockLogUncheckedCreateInputObjectSchema ]), update: z.union([ StockLogUpdateInputObjectSchema, StockLogUncheckedUpdateInputObjectSchema ]) }).strict();