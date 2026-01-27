import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './objects/StockLogSelect.schema';
import { StockLogUpdateManyMutationInputObjectSchema as StockLogUpdateManyMutationInputObjectSchema } from './objects/StockLogUpdateManyMutationInput.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './objects/StockLogWhereInput.schema';

export const StockLogUpdateManyAndReturnSchema: z.ZodType<Prisma.StockLogUpdateManyAndReturnArgs> = z.object({ select: StockLogSelectObjectSchema.optional(), data: StockLogUpdateManyMutationInputObjectSchema, where: StockLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StockLogUpdateManyAndReturnArgs>;

export const StockLogUpdateManyAndReturnZodSchema = z.object({ select: StockLogSelectObjectSchema.optional(), data: StockLogUpdateManyMutationInputObjectSchema, where: StockLogWhereInputObjectSchema.optional() }).strict();