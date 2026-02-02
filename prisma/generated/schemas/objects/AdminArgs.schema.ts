import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminSelectObjectSchema as AdminSelectObjectSchema } from './AdminSelect.schema';
import { AdminIncludeObjectSchema as AdminIncludeObjectSchema } from './AdminInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AdminSelectObjectSchema).optional(),
  include: z.lazy(() => AdminIncludeObjectSchema).optional()
}).strict();
export const AdminArgsObjectSchema = makeSchema();
export const AdminArgsObjectZodSchema = makeSchema();
