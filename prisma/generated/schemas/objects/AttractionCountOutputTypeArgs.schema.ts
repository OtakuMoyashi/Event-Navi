import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionCountOutputTypeSelectObjectSchema as AttractionCountOutputTypeSelectObjectSchema } from './AttractionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AttractionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AttractionCountOutputTypeArgsObjectSchema = makeSchema();
export const AttractionCountOutputTypeArgsObjectZodSchema = makeSchema();
