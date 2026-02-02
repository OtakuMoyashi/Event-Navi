import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './AttractionSelect.schema';
import { AttractionIncludeObjectSchema as AttractionIncludeObjectSchema } from './AttractionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AttractionSelectObjectSchema).optional(),
  include: z.lazy(() => AttractionIncludeObjectSchema).optional()
}).strict();
export const AttractionArgsObjectSchema = makeSchema();
export const AttractionArgsObjectZodSchema = makeSchema();
