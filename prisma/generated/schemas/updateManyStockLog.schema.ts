import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogUpdateManyMutationInputObjectSchema as StockLogUpdateManyMutationInputObjectSchema } from './objects/StockLogUpdateManyMutationInput.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './objects/StockLogWhereInput.schema';

export const StockLogUpdateManySchema: z.ZodType<Prisma.StockLogUpdateManyArgs> = z.object({ data: StockLogUpdateManyMutationInputObjectSchema, where: StockLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StockLogUpdateManyArgs>;

export const StockLogUpdateManyZodSchema = z.object({ data: StockLogUpdateManyMutationInputObjectSchema, where: StockLogWhereInputObjectSchema.optional() }).strict();