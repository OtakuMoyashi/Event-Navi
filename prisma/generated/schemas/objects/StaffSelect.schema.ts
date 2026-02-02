import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  supabaseUserId: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  storeId: z.boolean().optional(),
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const StaffSelectObjectSchema: z.ZodType<Prisma.StaffSelect> = makeSchema() as unknown as z.ZodType<Prisma.StaffSelect>;
export const StaffSelectObjectZodSchema = makeSchema();
