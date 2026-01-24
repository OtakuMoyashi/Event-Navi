import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AttractionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AttractionWhereInputObjectSchema).optional().nullable()
}).strict();
export const AttractionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AttractionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AttractionNullableScalarRelationFilter>;
export const AttractionNullableScalarRelationFilterObjectZodSchema = makeSchema();
