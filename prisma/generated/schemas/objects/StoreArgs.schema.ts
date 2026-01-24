import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './StoreInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StoreSelectObjectSchema).optional(),
  include: z.lazy(() => StoreIncludeObjectSchema).optional()
}).strict();
export const StoreArgsObjectSchema = makeSchema();
export const StoreArgsObjectZodSchema = makeSchema();
