import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './StockLogWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StockLogWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => StockLogWhereInputObjectSchema).optional().nullable()
}).strict();
export const StockLogNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.StockLogNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StockLogNullableScalarRelationFilter>;
export const StockLogNullableScalarRelationFilterObjectZodSchema = makeSchema();
