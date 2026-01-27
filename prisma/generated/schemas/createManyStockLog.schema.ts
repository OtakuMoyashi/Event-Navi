import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogCreateManyInputObjectSchema as StockLogCreateManyInputObjectSchema } from './objects/StockLogCreateManyInput.schema';

export const StockLogCreateManySchema: z.ZodType<Prisma.StockLogCreateManyArgs> = z.object({ data: z.union([ StockLogCreateManyInputObjectSchema, z.array(StockLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StockLogCreateManyArgs>;

export const StockLogCreateManyZodSchema = z.object({ data: z.union([ StockLogCreateManyInputObjectSchema, z.array(StockLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();