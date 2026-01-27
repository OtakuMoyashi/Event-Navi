import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogSelectObjectSchema as StockLogSelectObjectSchema } from './objects/StockLogSelect.schema';
import { StockLogCreateManyInputObjectSchema as StockLogCreateManyInputObjectSchema } from './objects/StockLogCreateManyInput.schema';

export const StockLogCreateManyAndReturnSchema: z.ZodType<Prisma.StockLogCreateManyAndReturnArgs> = z.object({ select: StockLogSelectObjectSchema.optional(), data: z.union([ StockLogCreateManyInputObjectSchema, z.array(StockLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StockLogCreateManyAndReturnArgs>;

export const StockLogCreateManyAndReturnZodSchema = z.object({ select: StockLogSelectObjectSchema.optional(), data: z.union([ StockLogCreateManyInputObjectSchema, z.array(StockLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();