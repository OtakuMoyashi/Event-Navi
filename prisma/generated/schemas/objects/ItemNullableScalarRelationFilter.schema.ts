import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ItemWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ItemWhereInputObjectSchema).optional().nullable()
}).strict();
export const ItemNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ItemNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ItemNullableScalarRelationFilter>;
export const ItemNullableScalarRelationFilterObjectZodSchema = makeSchema();
