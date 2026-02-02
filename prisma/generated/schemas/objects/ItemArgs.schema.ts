import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './ItemSelect.schema';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './ItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ItemSelectObjectSchema).optional(),
  include: z.lazy(() => ItemIncludeObjectSchema).optional()
}).strict();
export const ItemArgsObjectSchema = makeSchema();
export const ItemArgsObjectZodSchema = makeSchema();
