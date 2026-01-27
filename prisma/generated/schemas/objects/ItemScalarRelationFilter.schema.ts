import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemScalarRelationFilterObjectSchema: z.ZodType<Prisma.ItemScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ItemScalarRelationFilter>;
export const ItemScalarRelationFilterObjectZodSchema = makeSchema();
