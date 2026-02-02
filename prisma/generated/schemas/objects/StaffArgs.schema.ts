import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './StaffInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StaffSelectObjectSchema).optional(),
  include: z.lazy(() => StaffIncludeObjectSchema).optional()
}).strict();
export const StaffArgsObjectSchema = makeSchema();
export const StaffArgsObjectZodSchema = makeSchema();
