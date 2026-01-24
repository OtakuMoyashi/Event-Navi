import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AttractionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AttractionWhereInputObjectSchema).optional()
}).strict();
export const AttractionScalarRelationFilterObjectSchema: z.ZodType<Prisma.AttractionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AttractionScalarRelationFilter>;
export const AttractionScalarRelationFilterObjectZodSchema = makeSchema();
