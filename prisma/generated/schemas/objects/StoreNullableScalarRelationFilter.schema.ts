import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StoreWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => StoreWhereInputObjectSchema).optional().nullable()
}).strict();
export const StoreNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.StoreNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StoreNullableScalarRelationFilter>;
export const StoreNullableScalarRelationFilterObjectZodSchema = makeSchema();
