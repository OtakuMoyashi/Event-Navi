import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  role: AdminRoleSchema,
  eventId: z.string().optional().nullable(),
  storeId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AdminUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AdminUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUncheckedCreateInput>;
export const AdminUncheckedCreateInputObjectZodSchema = makeSchema();
