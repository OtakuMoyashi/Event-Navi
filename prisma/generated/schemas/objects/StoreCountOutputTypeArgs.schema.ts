import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCountOutputTypeSelectObjectSchema as StoreCountOutputTypeSelectObjectSchema } from './StoreCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StoreCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StoreCountOutputTypeArgsObjectSchema = makeSchema();
export const StoreCountOutputTypeArgsObjectZodSchema = makeSchema();
