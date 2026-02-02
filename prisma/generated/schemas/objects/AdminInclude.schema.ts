import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema'

const makeSchema = () => z.object({
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional()
}).strict();
export const AdminIncludeObjectSchema: z.ZodType<Prisma.AdminInclude> = makeSchema() as unknown as z.ZodType<Prisma.AdminInclude>;
export const AdminIncludeObjectZodSchema = makeSchema();
