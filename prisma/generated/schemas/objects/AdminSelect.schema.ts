import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  supabaseUserId: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  role: z.boolean().optional(),
  eventId: z.boolean().optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  storeId: z.boolean().optional(),
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const AdminSelectObjectSchema: z.ZodType<Prisma.AdminSelect> = makeSchema() as unknown as z.ZodType<Prisma.AdminSelect>;
export const AdminSelectObjectZodSchema = makeSchema();
