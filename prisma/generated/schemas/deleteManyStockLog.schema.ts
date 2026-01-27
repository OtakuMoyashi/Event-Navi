import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './objects/StockLogWhereInput.schema';

export const StockLogDeleteManySchema: z.ZodType<Prisma.StockLogDeleteManyArgs> = z.object({ where: StockLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StockLogDeleteManyArgs>;

export const StockLogDeleteManyZodSchema = z.object({ where: StockLogWhereInputObjectSchema.optional() }).strict();