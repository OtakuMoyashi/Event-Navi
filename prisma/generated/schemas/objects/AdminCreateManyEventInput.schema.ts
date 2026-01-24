import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  role: AdminRoleSchema,
  storeId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AdminCreateManyEventInputObjectSchema: z.ZodType<Prisma.AdminCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateManyEventInput>;
export const AdminCreateManyEventInputObjectZodSchema = makeSchema();
